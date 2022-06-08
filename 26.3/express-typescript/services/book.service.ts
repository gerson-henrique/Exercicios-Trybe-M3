// ./services/books.service.ts

import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interface/book.interface';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }
}

export default BookService;