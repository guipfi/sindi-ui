import styles from './styles.module.scss';

interface IShortcutButton {
  title: string;
  icon: React.ReactNode;
  color: 'black' | 'pink';
}

export const ShortcutButton: React.FC<IShortcutButton> = ({ title, icon, color }) => {
  return (
    <button>{title}</button>
  );
};
