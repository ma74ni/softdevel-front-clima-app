import Echo from "laravel-echo";
import Pusher from "pusher-js";

export default defineNuxtPlugin(() => {
  const echo = new Echo({
    broadcaster: "pusher",
    key: "reverb",
    wsHost: "127.0.0.1",
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    enabledTransports: ["ws", "wss"],
  });

  return {
    provide: {
      echo,
    },
  };
});
