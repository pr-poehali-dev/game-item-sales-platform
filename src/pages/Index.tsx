import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const games = [
    { name: "Adopt Me!", items: "2,500+", popular: true },
    { name: "Brookhaven", items: "1,800+", popular: true },
    { name: "Murder Mystery 2", items: "950+", popular: false },
    { name: "Jailbreak", items: "1,200+", popular: false },
    { name: "Bloxburg", items: "800+", popular: false },
    { name: "Arsenal", items: "650+", popular: false },
  ];

  const featuredItems = [
    {
      name: "Legendary Pet Dragon",
      game: "Adopt Me!",
      price: "299₽",
      rarity: "Legendary",
      image: "/img/5320342d-c49c-4094-9599-075cfbe2f68a.jpg",
    },
    {
      name: "Neon Unicorn",
      game: "Adopt Me!",
      price: "199₽",
      rarity: "Ultra-Rare",
      image: "/img/7de944f6-696a-4873-99cd-e8b67cac54cc.jpg",
    },
    {
      name: "Chroma Knife",
      game: "Murder Mystery 2",
      price: "459₽",
      rarity: "Chroma",
      image: "/img/7755484d-444c-47eb-a6a6-99fb569c30ae.jpg",
    },
    {
      name: "Dominus Rex",
      game: "Catalog",
      price: "1,299₽",
      rarity: "Limited",
    },
    { name: "Golden Egg", game: "Adopt Me!", price: "89₽", rarity: "Rare" },
    { name: "Robux 800", game: "Robux", price: "699₽", rarity: "Currency" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={32} className="text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">RobloxMarket</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Игры
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Предметы
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Как купить
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
              <Button size="sm">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Лучшие предметы для Roblox
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Покупайте и продавайте игровые предметы быстро и безопасно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Начать покупки
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">15,000+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">50,000+</div>
              <div className="text-gray-600">Предметов в наличии</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <div className="text-gray-600">Поддержка клиентов</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">99.9%</div>
              <div className="text-gray-600">Успешных сделок</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные игры
            </h3>
            <p className="text-lg text-gray-600">
              Выберите игру и найдите нужные предметы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{game.name}</CardTitle>
                    {game.popular && (
                      <Badge
                        variant="secondary"
                        className="bg-orange-100 text-orange-800"
                      >
                        <Icon name="TrendingUp" size={12} className="mr-1" />
                        Топ
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Package" size={16} className="mr-2" />
                    {game.items} предметов
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Смотреть предметы
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Рекомендуемые предметы
            </h3>
            <p className="text-lg text-gray-600">
              Самые популярные предметы этой недели
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {item.rarity}
                    </Badge>
                    <Icon
                      name="Heart"
                      size={16}
                      className="text-gray-400 hover:text-red-500 cursor-pointer"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Icon name="Gem" size={40} className="text-indigo-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.game}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-xl font-bold text-indigo-600">
                    {item.price}
                  </div>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Как купить предмет
            </h3>
            <p className="text-lg text-gray-600">
              Простой процесс покупки в 3 шага
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">1. Найдите предмет</h4>
              <p className="text-gray-600">
                Выберите игру и найдите нужный предмет в каталоге
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={24} className="text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">2. Оплатите</h4>
              <p className="text-gray-600">
                Безопасная оплата картой или через электронные кошельки
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={24} className="text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">3. Получите</h4>
              <p className="text-gray-600">
                Предмет автоматически появится в вашем аккаунте Roblox
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Остались вопросы?</h3>
          <p className="text-xl mb-8 text-indigo-100">
            Наша команда поддержки готова помочь 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в чат
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" size={24} className="text-indigo-400" />
                <span className="text-xl font-bold">RobloxMarket</span>
              </div>
              <p className="text-gray-400">
                Лучший маркетплейс для покупки предметов Roblox
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Игры</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Adopt Me!
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Brookhaven
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Murder Mystery 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Jailbreak
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Как купить
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Безопасность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>support@robloxmarket.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RobloxMarket. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
