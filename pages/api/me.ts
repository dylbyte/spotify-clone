import { validateRoute } from "../../lib/auth";

export default validateRoute((res, res, user) => {
  res.json(user);
});
