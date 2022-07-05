export const createUser = async (username, password) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  )
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log(result);
    // })
    .catch(console.error);
  const result = await response.json();
  console.log(result);
  return result;
};
