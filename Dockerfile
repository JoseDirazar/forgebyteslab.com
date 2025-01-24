# Usar una imagen ligera de Node.js
FROM node:18-alpine

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios
COPY pnpm-lock.yaml ./
COPY package.json ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN pnpm build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 4001

# Comando para ejecutar Vite en modo preview
CMD ["pnpm", "preview", "--", "--host", "0.0.0.0", "--port", "4001"]
