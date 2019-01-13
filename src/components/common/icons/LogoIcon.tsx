import { makeIcon } from '../../../utils/makeIcon';

import TelegramLogo from '../../../assets/icons/logo.svg';

export const LogoIcon = ({ className }: { className?: string }) => makeIcon(TelegramLogo.id, className);