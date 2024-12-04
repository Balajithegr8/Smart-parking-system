FROM node:18.18.2

RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    ffmpeg \
    libsm6 \
    libxext6 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json .

RUN pip3 install --break-system-packages PyYAML numpy opencv-python

RUN npm ci

COPY . .

EXPOSE 9000

CMD ["node", "index.js"]
