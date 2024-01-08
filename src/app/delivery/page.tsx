import { Paragraph } from "@/components/paragraph";
import Link from "next/link";

export default function Delivery() {
  return (
    <main className="wrapper px-2 sm:px-3 md:px-4 pb-12 pt-16 text-lg">
      <header className="w-full fixed top-0 left-0 bg-foreground/90 backdrop-blur-sm">
        <div className="wrapper flex items-center gap-4 px-2 sm:px-3 md:px-4 py-2">
          <Link href="/">
            На главную
          </Link>
        </div>
      </header>
      <h1 className="text-4xl font-bold text-center">
        Доставка ламми
      </h1>
      <div className="py-4" />
      <h2 className="text-2xl font-medium">
        Доступные способы доставки:
      </h2>
      <Paragraph>
        <h2 className="text-2xl font-medium">
          1.	Быстрая доставка
        </h2>
        <Paragraph>
        Действует только в Алматы.
        </Paragraph>
        <Paragraph>
          Доступные способы оплаты: банковской картой. 
        </Paragraph>
        <Paragraph>
          Как оформить заказ с быстрой доставкой:
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              • Выберите нужные средства на сайте.
            </li>
            <li>
              • Оформите заказ на сайте, выбрав способ «доставка из магазина».
            </li>
            <li>
              • Вы получите SMS-сообщение, как только заказ будет собран и передан курьеру.
            </li>
            <li>
              • Ждите курьера с посылкой!
            </li>
          </ul>
        </Paragraph>
        <div className="py-4" />
        <h2 className="text-2xl font-medium">
          2.	Курьерская доставка на выбранный адрес. Доставка осуществляется курьерскими компаниями.
        </h2>
        <Paragraph>
          СДЭК Каз. Доступные способы оплаты: система платежных карт Kaspi.kz – АО «Kaspi Bank» (через приложение или QR-код), наличные.
        </Paragraph>
        <div className="py-4" />
        <h2 className="text-2xl font-medium">
          3.	Казпочта.
        </h2>
      </Paragraph>
      <Paragraph>
        Доступные способы доставки: банковская карта, наличные
      </Paragraph>
      <div className="py-4" />
      <h2 className="text-2xl font-medium">
        Стоимость доставки и ограничения
      </h2>
      <Paragraph>
        Стоимость доставки зависит от выбранного способа доставки и курьерской службы. <br />
        Доставка от 1 250 тенге, цена зависит от курьерской службы. <br />
      </Paragraph>
      
      <div className="py-4" />
      <h2 className="text-2xl font-medium">
        Информирование о дате доставки заказа или о готовности к выдаче из пункта самовывоза:
      </h2>
      <Paragraph>
        Курьерская доставка: после прибытия заказа в город назначения с вами свяжется представитель курьерской компании для согласования даты и интервала времени доставки. <br />
      </Paragraph>
      <Paragraph>
        Самовывоз из ПВЗ: после поступления заказа в ПВЗ, вам придет смс/e-mail уведомление. Срок хранения заказа можно продлить, обратившись в Службу Поддержки Клиентов.
      </Paragraph>

      <div className="py-4" />
      <h2 className="text-2xl font-medium">
        Получение заказа
      </h2>
      <Paragraph>
        <h2 className="text-2xl font-medium">
          При получении заказа рекомендуем выполнить следующие действия:
        </h2>
        <Paragraph>
          1.	Проверить целостность внешней упаковки и коробки.
        </Paragraph>
        <Paragraph>
          2.	После вскрытия внешней упаковки проверить содержимое заказа на предмет соответствия заказу и отсутствие дефектов 
          <Paragraph>
            Обращаем ваше внимание: <br />
          • Вскрытие упаковки возможно только у оплаченного заказа; <br />
          • Нельзя вскрывать индивидуальную упаковку товара, если это нарушает товарный вид. <br />
          </Paragraph>
        </Paragraph>
        <Paragraph>
          3.	В случае несоответствия доставленного товара заказанному вами, нужно обратиться в Службу Поддержки клиентов.
        </Paragraph>
        <Paragraph>
          4.	Возврат заказа возможен только через обращение в Службу поддержки клиентов по телефону <a className="underline" href="tel:+77078635399">+7 707 863 53 99</a>. Возврат заказа курьеру невозможен.
        </Paragraph>
        <Paragraph>
          5.	Частичная оплата заказа невозможна.
        </Paragraph>

        <div className="py-4" />
        <h2 className="text-2xl font-medium">
          Если доставили другой заказ
        </h2>
        <Paragraph>
          В этом случае Вам необходимо сразу же вернуть заказ курьеру, оформив накладную и указать причины возврата заказа.
        </Paragraph>
      </Paragraph>
    </main>
  )
}