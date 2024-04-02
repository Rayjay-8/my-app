import { exec } from 'child_process';
import { promisify } from 'util';

import axios from 'axios';
import fs from 'fs';

// const execAsync = promisify(exec);

async function honovideo(c) {
   const url = c.req.param('url')
   return c.json({ success: true, url})
   console.log(c.request.url)
   const videoUrl = c.params.url;
   // const videoUrl = c.query.url;
   try {
      // Faz o download do vídeo usando a biblioteca axios
      const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      const videoData = Buffer.from(response.data, 'binary');

      // Salva o vídeo em um arquivo temporário
      const videoPath = '/tmp/video.mp4';
      await fs.promises.writeFile(videoPath, videoData);

      // Converte o vídeo para MP3 usando o FFmpeg
      // const outputPath = '/tmp/audio.mp3';
      // await execAsync(`ffmpeg -i ${videoPath} -vn -acodec libmp3lame ${outputPath}`);

      // Lê o arquivo de áudio convertido
      // const audioData = await fs.promises.readFile(outputPath);

      // Retorna o áudio como uma string base64
      // return audioData.toString('base64');
      return 
   } catch (error) {
      console.error('Erro ao converter o vídeo para MP3:', error);
      throw error;
   }
}

export default honovideo;