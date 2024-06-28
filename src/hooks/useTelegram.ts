const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onReady = () => {
    tg.ready();
  };

  const onToggleButton = () => {
    const button = tg.MainButton;
    button.isVisible ? button.hide() : button.show();
  };

  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user,
    onToggleButton,
    onReady,
  };
}
