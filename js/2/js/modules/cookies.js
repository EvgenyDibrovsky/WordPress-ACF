import 'vanilla-cookieconsent';

export default function initializeCookieConsent() {
  if (!document.getElementById('cc--main')) {
    window.CC = window.initCookieConsent();
    window.CC.run({
      current_lang: 'pl',
      autoclear_cookies: true, // default: false
      page_scripts: false, // default: false
      // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
      // delay: 0,                               // default: 0
      // auto_language: null                     // default: null; could also be 'browser' or 'document'
      // autorun: true,                          // default: true
      // force_consent: false,                   // default: false
      // hide_from_bots: true,                   // default: true
      // remove_cookie_tables: false             // default: false
      // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
      // cookie_expiration: 182,                 // default: 182 (days)
      // cookie_necessary_only_expiration: 182   // default: disabled
      // cookie_domain: location.hostname,       // default: current domain
      // cookie_path: '/',                       // default: root
      // cookie_same_site: 'Lax',                // default: 'Lax'
      // use_rfc_cookie: false,                  // default: false
      // revision: 0,                            // default: 0

      gui_options: {
        consent_modal: {
          layout: 'box', // box/cloud/bar
          position: 'bottom left', // bottom/middle/top + left/right/center
        },
      },

      // onFirstAction: function (user_preferences, cookie) {
      // callback triggered only once
      // },

      // onAccept: function (cookie) {
      // ...
      // },

      // onChange: function (cookie, changed_preferences) {
      // ...
      // },

      languages: {
        pl: {
          consent_modal: {
            title: 'Używamy cookies!',
            description:
              'Witaj, ta witryna korzysta z niezbędnych plików cookie, aby zapewnić jej prawidłowe działanie oraz ze śledzących plików cookie, które pozwalają zrozumieć, w jaki sposób z nią współdziałasz. <button type="button" data-cc="c-settings" class="cc-link">Pozwól mi wybrać</button><br><br><a class="!font-bold !text-brown" href="/polityka-prywatnosci/" target="_blank" rel="noopener noreferrer">Polityka prywatności</a>',

            primary_btn: {
              text: 'Akceptuj wszystkie',
              role: 'accept_all', // 'accept_selected' or 'accept_all'
            },
            // secondary_btn: {
            //     text: 'Reject all',
            //     role: 'accept_necessary', // 'settings' or 'accept_necessary'
            // },
          },
          settings_modal: {
            title: 'Preferencje plików cookie',
            save_settings_btn: 'Zapisz ustawienia',
            accept_all_btn: 'Akceptuj wszystkie',
            reject_all_btn: 'Odrzuć wszystkie',
            close_btn_label: 'Zamknij',
            cookie_table_headers: [{ col1: 'Name' }, { col2: 'Domain' }, { col3: 'Expiration' }, { col4: 'Description' }],
            blocks: [
              {
                title: 'Wykorzystanie plików cookie 📢',
                description:
                  'Używamy plików cookie, aby zapewnić podstawowe funkcjonalności witryny i usprawnić korzystanie z Internetu. Dla każdej kategorii możesz zdecydować się na włączenie/wyłączenie, kiedy tylko chcesz.',
                // Aby uzyskać więcej informacji na temat plików cookie i innych wrażliwych danych, przeczytaj całość <a href="#" class="cc-link">privacy policy</a>.
              },
              {
                title: 'Niezbędne pliki cookie',
                description: 'Te pliki cookie są niezbędne do prawidłowego funkcjonowania mojej witryny. Bez tych plików cookie witryna nie będzie działać poprawnie',
                toggle: {
                  value: 'necessary',
                  enabled: true,
                  readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                },
              },
              {
                title: 'Pliki cookie dotyczące wydajności i analityki',
                description: 'Te pliki cookie pozwalają witrynie internetowej zapamiętać wybory dokonane przez Ciebie w przeszłości',
                toggle: {
                  value: 'analytics', // your cookie category
                  enabled: false,
                  readonly: false,
                },
                // cookie_table: [
                //     // list of all expected cookies
                //     {
                //         col1: '^_ga', // match all cookies starting with "_ga"
                //         col2: 'google.com',
                //         col3: '2 years',
                //         col4: 'description ...',
                //         is_regex: true,
                //     },
                //     {
                //         col1: '_gid',
                //         col2: 'google.com',
                //         col3: '1 day',
                //         col4: 'description ...',
                //     },
                // ],
              },
              {
                title: 'Pliki cookie dotyczące reklam i targetowania',
                description:
                  'Te pliki cookie zbierają informacje o tym, w jaki sposób korzystasz z witryny, jakie strony odwiedziłeś i na które linki kliknąłeś. Wszystkie dane są anonimowe i nie pozwalają na identyfikację użytkownika',
                toggle: {
                  value: 'targeting',
                  enabled: false,
                  readonly: false,
                },
              },
              {
                title: 'Więcej informacji',
                description:
                  'W przypadku jakichkolwiek pytań dotyczących naszej polityki dotyczącej plików cookie i Twoich wyborów, prosimy o kontakt <a class="cc-link" href="#kontakt">napisz do nas</a>.',
              },
            ],
          },
        },
      },
    });
  }
}
