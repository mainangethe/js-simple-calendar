const page_unordered_list = document.querySelector( 'ul' );
const page_month_selection = document.querySelector( 'select' );
const quotes_array = {};

let page_quote = document.querySelector( '.monthly-quote p');
let page_author = document.querySelector( '.quote-author p');
let quote_background = document.querySelector( '.quote-bg');

quotes_array [ 'jan_quote' ] = 'A bird that flies off the earth and lands on \
an anthill is still on the ground.';
quotes_array [ 'jan_author' ] = 'Igbo Proverb';
quotes_array [ 'jan_background' ] = '#800000';

quotes_array [ 'feb_quote' ] = 'He that beats the drum for the mad man to dance \
is no better than the mad manhimself.';
quotes_array [ 'feb_author' ] = 'African Proverb';
quotes_array [ 'feb_background' ] = '#000075';

quotes_array [ 'mar_quote' ] = 'Where water is the boss there the land must obey.';
quotes_array [ 'mar_author' ] = 'African Proverb';
quotes_array [ 'mar_background' ] = '#9a6324';


quotes_array [ 'apr_quote' ] = 'No matter how beautiful and well crafted a coffin \
might look, it will not make anyone wish for death.';
quotes_array [ 'apr_author' ] = 'African Proverb';
quotes_array [ 'apr_background' ] = '#469990';

quotes_array [ 'may_quote' ] = 'When the shepherd comes home in peace, the milk is sweet.';
quotes_array [ 'may_author' ] = 'Ethopian Proverb';
quotes_array [ 'may_background' ] = '#808000';


quotes_array [ 'jun_quote' ] = 'A spider’s cobweb isn’t only its sleeping spring \
 but also its food trap.';
 quotes_array [ 'jun_author' ] = 'African Proverb';
 quotes_array [ 'jun_background' ] = '#3cb44b';

quotes_array [ 'jul_quote' ] = 'If you do not have patience you cannot make beer.';
quotes_array [ 'jul_author' ] = 'Ovambo Proverb';
quotes_array [ 'jul_background' ] = '#f58231';

quotes_array [ 'aug_quote' ] = 'He who runs after good fortune runs away from peace.';
quotes_array [ 'aug_author' ] = 'African Proverb';
quotes_array [ 'aug_background' ] = '#4363d8';

quotes_array [ 'sep_quote' ] = 'Teeth do not see poverty.';
quotes_array [ 'sep_author' ] = 'Maasai Proverb';
quotes_array [ 'sep_background' ] = '#f032e6';

quotes_array [ 'oct_quote' ] = 'You have little power over what’s not yours.';
quotes_array [ 'oct_author' ] = 'Zimbabwean Proverb';
quotes_array [ 'oct_background' ] = '#000';


quotes_array [ 'nov_quote' ] = 'If you pick up one end of the stick you also pick \
up the other.';
quotes_array [ 'nov_author' ] = 'Ethopian Proverb';
quotes_array [ 'nov_background' ] = '#911eb4';

quotes_array [ 'dec_quote' ] = 'Better little than too little.';
quotes_array [ 'dec_author' ] = 'Cameroonian Proverb';
quotes_array [ 'dec_background' ] = 'e6194b';

function quotePicker( month ) {
  switch( month ) {
    case 'jan':
      page_quote.textContent = quotes_array.jan_quote;
      page_author.textContent = quotes_array.jan_author;
      quote_background.style.backgroundColor = quotes_array.jan_background;
      break;
    case 'feb':
      page_quote.textContent = quotes_array.feb_quote;
      page_author.textContent = quotes_array.feb_author;
      quote_background.style.backgroundColor = quotes_array.feb_background;
      break;
    case 'mar':
      page_quote.textContent = quotes_array.mar_quote;
      page_author.textContent = quotes_array.mar_author;
      quote_background.style.backgroundColor = quotes_array.mar_background;
      break;
    case 'apr':
      page_quote.textContent = quotes_array.apr_quote;
      page_author.textContent = quotes_array.apr_author;
      quote_background.style.backgroundColor = quotes_array.apr_background;
      break;
    case 'may':
      page_quote.textContent = quotes_array.may_quote;
      page_author.textContent = quotes_array.may_author;
      quote_background.style.backgroundColor = quotes_array.may_background;
      break;
    case 'jun':
      page_quote.textContent = quotes_array.jun_quote;
      page_author.textContent = quotes_array.jun_author;
      quote_background.style.backgroundColor = quotes_array.jun_background;
      break;
    case 'jul':
      page_quote.textContent = quotes_array.jul_quote;
      page_author.textContent = quotes_array.jul_author;
      quote_background.style.backgroundColor = quotes_array.jul_background;
      break;
    case 'aug':
      page_quote.textContent = quotes_array.aug_quote;
      page_author.textContent = quotes_array.aug_author;
      quote_background.style.backgroundColor = quotes_array.aug_background;
      break;
    case 'sep':
      page_quote.textContent = quotes_array.sep_quote;
      page_author.textContent = quotes_array.sep_author;
      quote_background.style.backgroundColor = quotes_array.sep_background;
      break;
    case 'oct':
      page_quote.textContent = quotes_array.oct_quote;
      page_author.textContent = quotes_array.oct_author;
      quote_background.style.backgroundColor = quotes_array.oct_background;
      break;
    case 'nov':
      page_quote.textContent = quotes_array.nov_quote;
      page_author.textContent = quotes_array.nov_author;
      quote_background.style.backgroundColor = quotes_array.nov_background;
      break;
    case 'dec':
      page_quote.textContent = quotes_array.dec_quote;
      page_author.textContent = quotes_array.dec_author;
      quote_background.style.backgroundColor = quotes_array.dec_background;
      break;
    }
}

function createCalendar( days ) {
  page_unordered_list.innerHTML = '';
  for (i = 1; i <= days; i++) {
    let list = document.createElement('li');
    if (i <= 9) { i ='0' + i; }
    list.textContent = i;
    page_unordered_list.appendChild(list);
  }
}

page_month_selection.onchange = function() {
  let user_choice = page_month_selection.value;
  let days = 30;
  quotePicker( user_choice );

  if (  user_choice === 'jan' ||
        user_choice === 'mar' ||
        user_choice === 'may' ||
        user_choice === 'jul' ||
        user_choice === 'aug' ||
        user_choice === 'oct' ||
        user_choice === 'dec') {
          days = 31;
        } else if ( user_choice === 'feb') {
          days = 28;
        }
    createCalendar( days );

}

quotePicker( 'jan');
createCalendar( 31 );
