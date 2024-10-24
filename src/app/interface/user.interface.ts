export interface userInterface {
  name: string;
  username: string;
  _id: string;
  createdAt: Date;
}

// ------------------------------ DELETE
export interface userInput {
  name: string;
  username: string;
  password: string;
}
