import { getPaymentInfo } from "@/api/pay";

import { Metadata } from 'next'
import Script from "next/script";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // const title = params.slug;
  const payment = await getPaymentInfo(params.slug);
  const title = payment.description

  return {
    title,
  }
}

export default async function Payment({ params }: { params: { slug: string } }) {
  const payment = await getPaymentInfo(params.slug);
  if (payment.status === "new") {
    return (
      <>
        <Script src="https://widget.cloudpayments.kz/bundles/cloudpayments.js"></Script>
        <Script 
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" 
          crossOrigin="anonymous"
        />
        <Script id="payment" dangerouslySetInnerHTML={{ __html: `
          if(typeof cp !== "undefined") {
            this.pay = function () {
              var widget = new cp.CloudPayments();
              widget.pay('charge', 
                  {
                      publicId: '${payment.public_id}', //id из личного кабинета
                      description: '${payment.description}', //назначение
                      amount: ${payment.sum}, //сумма
                      currency: 'KZT', //валюта
                      accountId: '${payment.account_id}', //идентификатор плательщика (необязательно)
                      invoiceId: '${payment.invoice_id}', //номер заказа
                      email: 'user@example.com', //email плательщика (необязательно)
                      skin: "mini", //дизайн виджета (необязательно)
                      autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
                      data: {
                          myProp: 'myProp value'
                      },
                      payer: {
                          firstName: 'Lammime',
                          lastName: 'Whatsapp Bot',
                          middleName: 'Payment',
                          birth: '2004-02-02',
                          address: 'Gagarin Avenue, 124',
                          street: 'Gagarin Avenua',
                          city: 'Almaty',
                          country: 'KZ',
                          phone: '+77787039850',
                          postcode: '050057'
                      }
                  },
                  {
                      onSuccess: function (options) { // success
                          //действие при успешной оплате
                      },
                      onFail: function (reason, options) { // fail
                          //действие при неуспешной оплате
                      },
                      onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                          //например вызов вашей аналитики
                      }
                  }
              )
            };
            this.pay();
          }
        ` }} />
      </>
    );
  }
  return (
    <div className="container col-span-9 px-4 py-5">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 py-5">
        <div className="lg:w-6/12">
          <h1 className="text-5xl font-bold leading-tight mb-3">Во время оплаты произошла ошибка</h1>
          <p className="text-xl">Возможно, вы уже оплатили бронирование данной записи, поэтому мы не можем повторно списать деньги</p>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 justify-start">
          </div>
        </div>
      </div>
    </div>
  )
}