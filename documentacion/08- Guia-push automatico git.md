## Guía de opciones para `git push` automático con token de GitHub
Este documento resume **3 alternativas** para que `git push` no te pida el usuario/token cada vez, explicando **ventajas y desventajas** de cada una.
Las opciones son:
1. `credential.helper store` (guarda en disco en texto plano)
2. `credential.helper cache` (guarda solo en memoria un tiempo)
3. `credential.helper libsecret` (usa el keyring cifrado de Ubuntu)
---
## Opción 1: `credential.helper store`
**Descripción**  
Git guarda tus credenciales (usuario + token) en un archivo de texto plano en tu home (`~/.git-credentials`).  
Cada vez que Git necesita autenticar, lee ese archivo automáticamente.
**Cómo activarla**
```bash
git config --global credential.helper store
```
Primer uso (en el repo):
```bash
cd /home/eduardo/Documents/Python_Projects/v0-blog-personal
git push origin main
```
Git pedirá:
- Username: `TU_USUARIO_GITHUB` (ej. `Eduardo3382`)
- Password: tu **token personal** de GitHub
Se guardará algo como:
```txt
https://TU_USUARIO:TOKEN@github.com
```
en `~/.git-credentials`.
**Pros**
- **Muy simple** de configurar (un solo comando).
- Funciona en **todos los repos** que usen HTTPS.
- Después del primer `push`, **no te pide más el token**, ni en este repo ni en otros.
**Contras**
- El token queda en **texto plano** en `~/.git-credentials`.
- Cualquiera con acceso a tu cuenta de usuario (o a un backup del home) puede leer ese archivo.
- Desde el punto de vista de seguridad, es la opción **menos segura** de las tres.
**Cuándo usarla**
- Máquina **100% personal**, sin otros usuarios.
- No te preocupa demasiado que el token esté en un archivo de texto.
- Priorizas **simplicidad absoluta** sobre seguridad.
---
## Opción 2: `credential.helper cache`
**Descripción**  
Git guarda tus credenciales en **memoria RAM** durante un tiempo limitado (por ejemplo, 1 hora).  
No escribe un archivo con el token en disco.
**Cómo activarla**
```bash
git config --global credential.helper 'cache --timeout=3600'
```
- `timeout=3600` → 3600 segundos = 1 hora.
- Puedes usar otro valor (por ejemplo, 86400 para 24 horas).
Primer uso (en el repo):
```bash
cd /home/eduardo/Documents/Python_Projects/v0-blog-personal
git push origin main
```
Git pedirá:
- Username: tu usuario de GitHub.
- Password: tu token.
Durante el tiempo de `timeout`, **no volverá a pedir credenciales**.  
Pasado ese tiempo, en el siguiente `push` te las pedirá de nuevo.
**Pros**
- No guarda el token en **texto plano** en disco.
- Equilibrio entre **comodidad** y **seguridad**.
- Configuración relativamente sencilla (un solo comando).
**Contras**
- Cada cierto tiempo (cuando vence el `timeout`) **tendrás que volver a meter el token**.
- Si cierras la sesión o reinicias, normalmente el cache se pierde y tocará reintroducir credenciales.
**Cuándo usarla**
- Te preocupa que el token **no quede en disco**, pero aceptas reescribirlo de vez en cuando.
- Trabajas por sesiones (ej. varias horas seguidas) y no te molesta poner el token al principio.
---
## Opción 3: `credential.helper libsecret` (recomendado para Ubuntu 24.04)
**Descripción**  
Git usa el helper `git-credential-libsecret` para guardar el token en el **keyring cifrado** del sistema (GNOME Keyring en Ubuntu).  
El token queda almacenado cifrado y gestionado por el entorno de escritorio, no en un archivo de texto plano.
**Pasos en Ubuntu 24.04**
1. Instalar dependencias (si hace falta):
```bash
sudo apt update
sudo apt install git libsecret-1-0 libsecret-1-dev
```
2. Compilar el helper (si no existe ya):
```bash
cd /usr/share/doc/git/contrib/credential/libsecret
sudo make
```
3. Configurar Git para usar `libsecret`:
```bash
git config --global credential.helper libsecret
```
Puedes comprobarlo con:
```bash
git config --global credential.helper
# debería mostrar: libsecret
```
4. Primer `push` (en el repo):
```bash
cd /home/eduardo/Documents/Python_Projects/v0-blog-personal
git push origin main
```
Git pedirá:
- Username: tu usuario de GitHub.
- Password: tu token.
El helper `libsecret` guardará este token en el **keyring cifrado** del sistema.  
Los siguientes `push` ya **no pedirán más credenciales**, y el token no estará en texto plano.
**Pros**
- El token se guarda en forma **cifrada**, gestionada por el sistema (GNOME Keyring).
- Es la opción **más segura** de las tres para un entorno de escritorio como Ubuntu.
- Comodidad similar a `store`: normalmente solo introducís el token una vez.
**Contras**
- Configuración **un poco más técnica** (instalar `libsecret-1-dev`, compilar el helper).
- Depende del keyring del entorno de escritorio (si algo falla ahí, puede afectar a las credenciales).
**Cuándo usarla**
- Usas Ubuntu con entorno gráfico (GNOME o similar).
- Quieres que el token esté guardado de forma **segura** y sin pedirlo cada vez.
- Prefieres evitar archivos de texto plano con secretos.
---
## ¿Cuál elegir?
- **Máxima sencillez, mínima seguridad** → `credential.helper store`
- **Equilibrio: seguridad razonable + algo de comodidad** → `credential.helper cache`
- **Mejor seguridad en Ubuntu de escritorio + comodidad** → `credential.helper libsecret` (recomendado)
Independientemente de la opción que elijas, el flujo siempre será:
1. Configuras el helper (store, cache o libsecret).
2. Haces un `git push origin main` e introduces:
   - Usuario de GitHub.
   - Token como contraseña.
3. A partir de ahí, Git usará ese helper para futuros `push` de forma (más) automática.
