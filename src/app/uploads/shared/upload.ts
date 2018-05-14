export class Upload {
  $key: string;
  file: File;
  name: string;
  url: string;
  progress: number;
  upload_date: number;
  createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }
}
