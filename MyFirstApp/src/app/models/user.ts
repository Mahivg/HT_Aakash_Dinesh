export class User {

  userName: string;

  password: string;

  emailId: string;

  constructor(pUserName: string, pPassWord: string, pEmail: string) {
    this.userName = pUserName;
    this.password = pPassWord;
    this.emailId = pEmail;
  }

}
