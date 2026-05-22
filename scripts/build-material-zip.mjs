import { mkdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const distDir = path.join(root, 'dist')
const outDir = path.join(root, 'public', 'downloads')
const outZip = path.join(outDir, 'material.zip')

// Compatibilidad con Windows
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const zipCmd = process.platform === 'win32' ? 'powershell' : 'zip'

function run(cmd, args, opts) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, {
      stdio: 'inherit',
      shell: true,
      ...opts,
    })

    p.on('error', (err) => {
      if (err.code === 'ENOENT') {
        reject(
          new Error(
            `No se encontró "${cmd}".`,
          ),
        )
      } else {
        reject(err)
      }
    })

    p.on('close', (code) =>
      code === 0
        ? resolve()
        : reject(new Error(`${cmd} salió con código ${code}`)),
    )
  })
}

async function main() {
  // Ejecutar build
  await run(npmCmd, ['run', 'build'], { cwd: root })

  // Crear carpeta de salida
  await mkdir(outDir, { recursive: true })

  // Eliminar zip anterior
  await rm(outZip, { force: true })

  if (process.platform === 'win32') {
    // Crear ZIP en Windows usando PowerShell
    await run(
      zipCmd,
      [
        '-Command',
        `Compress-Archive -Path '${distDir}\\*' -DestinationPath '${outZip}' -Force`,
      ],
      { cwd: root },
    )
  } else {
    // Linux / macOS
    await run('zip', ['-qr', outZip, '.'], { cwd: distDir })
  }

  console.log(`Listo: ${path.relative(root, outZip)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})