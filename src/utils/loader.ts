import { list } from "../services/database";

const loadProfile = async (user, supabase) => {
  if (user) {
    const { data: d, error } = await list(
      "profile",
      {
        user_id: user.id,
      },
      1,
      supabase
    );

    if (d && d.length === 1) {
      return {
        id: d[0].id,
        name: d[0].name,
        birth: d[0].birth,
        weigth: d[0].weigth,
        heigth: d[0].heigth,
      };
    }
  }
};

export { loadProfile };
