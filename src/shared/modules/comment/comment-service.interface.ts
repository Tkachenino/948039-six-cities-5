import { DocumentType } from '@typegoose/typegoose';
import { CreateCommentDto } from './dto/createCommentDto.js';
import { CommentEntity } from './comment.entity.js';


export interface CommentService {
  create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>>;
  findByOfferId(offerId: string): Promise<DocumentType<CommentEntity>[]>;
  deleteByOfferId(offerId: string): Promise<number | null>;
}