import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
//import { AuthGuard } from 'src/guards/auth.guard';

@Controller('files')
//@UseGuards(AuthGuard)
export class FileUploadController {
    constructor(private readonly fileUploadService: FileUploadService){}

    @Post("uploadImage/:id")
    @UseInterceptors(FileInterceptor("file"))
    async uploadImage(@Param("id") productId:string, @UploadedFile(new ParseFilePipe({
        validators:[
            new MaxFileSizeValidator({
                maxSize: 200000,
                message: "file is too large"
            }),
            new FileTypeValidator({
                fileType:/jpg|jpeg|gif|png|webp|svg/
            })
        ]
    }))file:Express.Multer.File){
        return await this.fileUploadService.uploadImage(productId, file)
    }
}
