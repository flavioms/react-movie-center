interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

const signIn = (): Promise<Response> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'ajsdnjasdnjasdnj',
        user: {
          name: 'flavio',
          email: 'flavio@teste.com.br',
        },
      });
    }, 9000);
  });
};
export default signIn;
