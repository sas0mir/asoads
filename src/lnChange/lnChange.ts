import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      h1: 'International advertising network for buying and selling traffic',
      pHeroBlock: 'On your first refill you will receive',
      spanHeroBlock: '10% bonus',
      p2HeroBlock: 'on account of',
      btnHeroBlock: 'Get a bonus',
      btnSphere: 'Get a consultation',
      trafficBlock: '100% Bot-Free High ROI',
      // ptrafficBlock: 'Качественный трафик,',
      // spanTrafficBlock: 'высокий ROI',
      h2AdFormat: 'Advertising Formats.',
      p1AdFormat: 'Easy engagement, fast reach, low CPC price',
      p11AdFormat: 'This format guarantees a high CTR',
      p12AdFormat: 'High visibility, good CTR',
      p13AdFormat: 'Provides a high conversion rate into a targeted action',
      p2AdFormat: 'A tab with ads that opens automatically behind or in front of a website after you click.',
      p21AdFormat:
        'A pop-up message that arrives to users on devices that have signed up for notifications, even if they are not on the site',
      p22AdFormat:
        'A pop-up message like Push Notifications, but does not require a subscription. Displayed only when the user interacts with the site.',
      p23AdFormat:
        'The format is integrated into the standard website content, making it less visible to Adblock. This allows for effective user engagement.',
      btnAdFormat: 'Start recruiting',
      vertikali: 'Verticals',
      h2TargetTools: 'Targeting tools',
      p1TargetTools: 'Countries',
      p2TargetTools: 'IP addresses  ',
      p3TargetTools: 'Time zone',
      p4TargetTools: 'Браузеры',
      p5TargetTools: 'Browsers',
      p6TargetTools: 'Subscription validity period',
      p7TargetTools: 'Internet providers',
      p8TargetTools: 'Types of devices',
      p9TargetTools: 'Operating system',
      btnTargetTools: 'Read more',
      h2WorkUs: 'Features of working with us',
      block1WorkUs: 'Instant moderation of advertising campaigns',
      block2WorkUs: 'Large volume of quality traffic, Anti-fraud system',
      block3WorkUs: 'Traffic from all over the world. More than 200 countries',
      block4WorkUs: 'Easy optimization of advertising campaigns',
      block5WorkUs: 'Large set of targeting tools',
      block6WorkUs: 'Variety of advertising formats',
      block7WorkUs: 'Qualified support service 24/7',
      block8WorkUs: 'Personal manager',
      h2Payment: 'Choose a payment method that is convenient for you',
      h2ContactUs: 'Contact us!',
      inputContactUs: 'Name',
      textareaContactUs: 'Message( optional )',
      btnContactUs: 'Send',
      pContactUs: 'Contacts:',
      error404:
        'We are very sorry for inconvenience. It looks you’re trying to access a page that either has been deleted or never been existed'
    }
  },
  ru: {
    translation: {
      h1: 'Рекламная сеть с качественной аудиторией для вашего бизнеса',
      pHeroBlock: 'При первом пополнении получите',
      spanHeroBlock: '10% бонус',
      p2HeroBlock: 'на счет',
      btnHeroBlock: 'Получить бонус',
      btnSphere: 'Получить консультацию',
      trafficBlock: '100% Bot-Free Высокий ROI',
      // ptrafficBlock: 'Качественный трафик,',
      // spanTrafficBlock: 'высокий ROI',
      h2AdFormat: 'Рекламные форматы',
      p1AdFormat: 'Легкое привлечение, быстрый охват, низкая цена по CPC',
      p11AdFormat: 'Данный формат гарантирует высокий CTR',
      p12AdFormat: 'Высокая видимость, хороший CTR',
      p13AdFormat: 'Обеспечивает высокую конверсию в целевое действие',
      p2AdFormat: 'Вкладка с рекламой, которая открывается автоматически позади или перед веб-сайтом после клика.',
      p21AdFormat:
        'Всплывающее сообщение, которое приходит пользователям на устройства, подписавшиеся на уведомления, даже если они не находятся на сайте',
      p22AdFormat:
        'Всплывающее сообщение, как у Push Notifications, но не требуюет подписки. Показывается только когда пользователь взаимодействует с сайтом.',
      p23AdFormat:
        'Формат интегрируется в стандартный контент сайта, что делает его менее заметным для Adblock. Это позволяет эффективно вовлекать пользователя.',
      btnAdFormat: 'Начать привлечение',
      vertikali: 'Вертикали',
      h2TargetTools: 'Инструменты таргетинга',
      p1TargetTools: 'Страны',
      p2TargetTools: 'IP-адреса ',
      p3TargetTools: 'Часовой пояс',
      p4TargetTools: 'Браузеры',
      p5TargetTools: 'Языковой таргетинг',
      p6TargetTools: 'Срок действия подписки',
      p7TargetTools: 'Интернет провайдеры',
      p8TargetTools: 'Типы устройств',
      p9TargetTools: 'Операционная система',
      btnTargetTools: 'Узнать больше',
      h2WorkUs: 'Особенности работы с нами',
      block1WorkUs: 'Мгновенная модерация рекламных кампаний',
      block2WorkUs: 'Большой объем качественного трафика, Anti-fraud system',
      block3WorkUs: 'Трафик со всего мира. Более 200 стран',
      block4WorkUs: 'Простая оптимизация рекламных кампаний',
      block5WorkUs: 'Большой набор инструментов таргетинга ',
      block6WorkUs: 'Разнообразие рекламных форматов',
      block7WorkUs: 'Квалифицированная служба поддержки 24/7',
      block8WorkUs: 'Персональный менеджер',
      h2Payment: 'Выбирай удобный для себя метод оплаты',
      h2ContactUs: 'Свяжитесь с нами!',
      inputContactUs: 'Имя',
      textareaContactUs: 'Сообщение( не обязательно )',
      btnContactUs: 'Отправить',
      pContactUs: 'Контакты:',
      error404:
        'Нам очень жаль за неудобства. Похоже, вы пытаетесь получить доступ к странице, которая либо была удалена, либо никогда не существовала.'
    }
  },

  es: {
    translation: {
      h1: 'Red publicitaria con audiencia de calidad para su negocio',
      pHeroBlock: 'En su primera recarga recibirá',
      spanHeroBlock: 'Bonificación del 10',
      p2HeroBlock: 'debido a',
      btnHeroBlock: 'Consigue una bonificación',
      btnSphere: 'Obtener asesoramiento',
      trafficBlock: '100% Libre de Bot Alto ROI',
      // ptrafficBlock: 'Качественный трафик,',
      // spanTrafficBlock: 'высокий ROI',
      h2AdFormat: 'Formatos publicitarios',
      p1AdFormat: 'Atracción fácil, alcance rápido, precio CPC bajo',
      p11AdFormat: 'Este formato garantiza un alto CTR',
      p12AdFormat: 'Alta visibilidad, buen CTR',
      p13AdFormat: 'Proporciona una alta conversión a una acción específica',
      p2AdFormat: 'Una pestaña con anuncios que se abre automáticamente detrás o delante de un sitio web después de hacer clic.',
      p21AdFormat:
        'Un mensaje emergente que llega a los usuarios de dispositivos que se han registrado para recibir notificaciones, aunque no estén en el sitio web.',
      p22AdFormat:
        'Un mensaje emergente como las notificaciones push, pero que no requiere suscripción. Solo se muestra cuando el usuario interactúa con el sitio.',
      p23AdFormat:
        'El formato se integra en el contenido estándar del sitio web, por lo que es menos visible para Adblock. Esto permite una participación efectiva del usuario.',
      btnAdFormat: 'Empezar a participar',
      vertikali: 'Verticales',
      h2TargetTools: 'Herramientas de selección',
      p1TargetTools: 'Países',
      p2TargetTools: 'Direcciones IP',
      p3TargetTools: 'Huso horario',
      p4TargetTools: 'Navegadores',
      p5TargetTools: 'Objetivos lingüísticos',
      p6TargetTools: 'Periodo de validez de la suscripción',
      p7TargetTools: 'Proveedores de Internet',
      p8TargetTools: 'Proveedores de Internet',
      p9TargetTools: 'Sistema operativo',
      btnTargetTools: 'Seguir leyendo',
      h2WorkUs: 'Ventajas de trabajar con nosotros',
      block1WorkUs: 'Moderación instantánea de las campañas publicitarias',
      block2WorkUs: 'Gran volumen de tráfico de calidad, sistema antifraude',
      block3WorkUs: 'Tráfico de todo el mundo. Más de 200 países',
      block4WorkUs: 'Optimización sencilla de las campañas publicitarias',
      block5WorkUs: 'Amplio conjunto de herramientas de selección',
      block6WorkUs: 'Variedad de formatos publicitarios',
      block7WorkUs: 'Servicio de asistencia cualificado 24 horas al día, 7 días a la semana',
      block8WorkUs: 'Gestor personal',
      h2Payment: 'Elija la forma de pago que más le convenga',
      h2ContactUs: 'Póngase en contacto con nosotros!',
      inputContactUs: 'Nombre',
      textareaContactUs: 'Mensaje( opcional)',
      btnContactUs: 'Envia',
      pContactUs: 'Contactos:',
      error404:
        'Sentimos mucho las molestias. Parece que está intentando acceder a una página que ha sido eliminada o que nunca ha existido.'
    }
  }
}

const savedLanguage = localStorage.getItem('language') || 'ru'

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  interpolation: {
    escapeValue: false
  }
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng)
})

export default i18n
