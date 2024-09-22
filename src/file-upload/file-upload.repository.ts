// import { Injectable } from '@nestjs/common';
// import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
// import toStream from 'buffer-to-stream';

// @Injectable()
// export class FileUploadRepository {
//   async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
//     return new Promise((resolve, rejects) => {
//       const upload = cloudinary.uploader.upload_stream(
//         { resource_type: 'auto' },
//         (error, result) => (error ? rejects(error) : resolve(result)),
//       );
//       toStream(file.buffer).pipe(upload);
//     });
//   }
// }
