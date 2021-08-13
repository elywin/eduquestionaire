import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <label>
          UserName:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
