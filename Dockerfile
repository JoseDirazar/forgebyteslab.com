# Usar una imagen ligera de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 4001

# Comando para ejecutar Vite en modo preview
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4001"]
