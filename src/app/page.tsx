import { Metadata } from 'next';
import HomePage from './Home/page'

export const metadata: Metadata = {
  title: "Главная",
  description: "Здесь вы можете найти партнёров для вашего бизнеса",
};

export default function Home() {
  return (
    <HomePage />
  );
}
