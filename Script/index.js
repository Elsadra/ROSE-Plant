$(document).ready(function () {
  class Grouping {
    constructor(name, desc, img) {
      this.name = name;
      this.desc = desc;
      this.img = img;
    }
  }

  class Comments {
    constructor(name, Comment, img, date) {
      this.name = name;
      this.Comment = Comment;
      this.img = img;
      this.date = date;
    }
  }

  const Grouping_1 = new Grouping(
    "بونسای",
    "بونسای گیاهی آپارتمانی تزئینی است که به شکل درخت های گوناگون یافت میشود و قیمت درختچه بونسای نیز با یکدیگر متفاوت است. بونسای از دو کلمه ژاپنی “بون” به معنی “سینی” و “سای” به معنی “کاشتن” تشکیل شده است؛ اما باید بدانید که این تنها یک اسم است و ...",
    "./Image/bonsai.svg"
  );
  const Grouping_2 = new Grouping(
    "سانسوریا",
    "این گل آپارتمانی که به شمشیری نیز شناخته میشود، عضوی از خانواده ساکولنت ها است و برگ های گوشتی دارد که با نگهداری مناسب تا ارتفاع یک متر نیز می‌رسند.  سانسوریا به طور معمول، برگ هایی کشیده و پهن به رنگ سبز پررنگ و رگه های سبز روشن یا نقره ای ... ",
    "./Image/sansevieria.svg"
  );
  const Grouping_3 = new Grouping(
    "فیکوس",
    "یکی از گیاهان زیبا و جذاب در محیط زندگی، که می‌توانید از آن در منزل نگهداری کنید و لذت ببرید گل فیکوس است. با مشاهده قیمت گل فیکوس و خرید آن، متوجه خواهید شد که این گیاه مقاومت بالایی در شرایط مختلف آب و هوایی دارد. هنگام خرید ...",
    "./Image/ficus.svg"
  );
  const Grouping_4 = new Grouping(
    "پتوس",
    "اگر به شدت به گل و گیاه علاقه دارید، اما فرصت کافی برای رسیدگی به آن در اختیارتان نیست، مطمئنا خرید گل پتوس یکی از گزینه‌های پیش روی شما خواهد بود. گیاهی با برگ‌های رونده که در برخی از گونه‌ها، رشد آن به چندین متر نیز می‌رسد. از این گیاه با ...",
    "./Image/pothos.svg"
  );
  const Grouping_5 = new Grouping(
    "ارکیده",
    "با خرید و نگهداری از گلدان ارکیده، حس لطافت و شادی در خون شما جریان می‌یابد. گلدان ارکیده شاپرکی گلی زیبا است که می‌تواند به منزل شما جلوه خاصی بدهد و برای هدیه دادن در هر مناسبتی بدرخشد. راز های فواید خرید گلدان ارکیده به قدری ازرشمند ...",
    "./Image/orchids.svg"
  );
  const Grouping_6 = new Grouping(
    "تراریوم",
    "تراریوم ها مزیت هایی فوق العاده خاص و کارآمد دارند که موجب محبوبیت بالای آن ها شده است. همچنین این دسته از گیاهان زینتی آپارتمانی قیمت مناسبی دارند و اگر با نگهداری نادرست، تراریوم خود را از بین بردید، دیگر نیازی نخواهید داشت تا همه ... ",
    "./Image/terrarium.svg"
  );

  const Comments_1 = new Comments(
    "صدرا رحمتی",
    "همه چی عالیه از محصولاتتون گرفته تا سایت خیلی خفنتون مرسی عالی هستید.",
    "./Image/user-1-Comment.jpg",
    "1402/6/7"
  );

  const Comments_2 = new Comments(
    "سجاد رحمتی",
    "از این فروشگاه حتما خرید کنید خیلی خوب بودش ممنون از سایت خوبی که درست کردید محصولاتتون هم خیلی خوبن مرسی",
    "./Image/user-2-Comment.jpg",
    "1402/5/8"
  );

  const Comments_3 = new Comments(
    "مریم اسدی",
    "5 بار از این فروشگاه خرید کردم و واقعا از همه لحاظ راضیم ازشون خیلی ممنون از رسیدگیتون عالیه",
    "",
    "1402/4/27"
  );

  const Comments_4 = new Comments(
    "رهام اسدی",
    "راضی نبودم",
    "./Image/user-4-Comment.jpg",
    "1402/2/18"
  );

  const Comments_5 = new Comments(
    "رضا پیشرو",
    "خطاب به کسایی که میگن سایت خوبی نیست. مشکل داری؟ مشکل داری؟ ما داریم زحمت میکشیم تو نمیدونی چه بلایی سره ما اومده بیخود میکنی فوش میدی غلط میکنی بی احترامی میکنی من عصابم بهم میریزه",
    "./Image/user-5-Comment.jpeg",
    "1402/1/16"
  );

  let card_1 = document.querySelector(".card-1");
  let card_2 = document.querySelector(".card-2");
  let card_3 = document.querySelector(".card-3");
  let card_4 = document.querySelector(".card-4");
  let card_5 = document.querySelector(".card-5");
  let card_6 = document.querySelector(".card-6");
  let card_Comments_1 = document.querySelector(".card-Comments-1");
  let card_Comments_2 = document.querySelector(".card-Comments-2");
  let card_Comments_3 = document.querySelector(".card-Comments-3");
  let card_Comments_4 = document.querySelector(".card-Comments-4");
  let card_Comments_5 = document.querySelector(".card-Comments-5");
  let container_send_Comment = document.querySelector(
    ".container-send-Comment"
  );
  let send_Comments_btn = document.querySelector(".btn-send-Comment");

  card_1.innerHTML = `
      <div class="image"><img class="image-card" width="70%" src="${Grouping_1.img}" alt="picture" title="picture"></div>
      <div class="content">
          <a href="#">
              <span class="title">${Grouping_1.name}</span>
          </a>
      
          <p class="desc">
          ${Grouping_1.desc}
          </p>
      
          <a class="action" href="#">
              اطلاعات بیشتر
              <span aria-hidden="true">
                  →
              </span>
          </a>
      </div>
      `;

  card_2.innerHTML = `
      <div class="image"><img class="image-card" width="70%" src="${Grouping_2.img}" alt="picture" title="picture"></div>
      <div class="content">
          <a href="#">
              <span class="title">${Grouping_2.name}</span>
          </a>
      
          <p class="desc">
          ${Grouping_2.desc}
          </p>
      
          <a class="action" href="#">
              اطلاعات بیشتر
              <span aria-hidden="true">
                  →
              </span>
          </a>
      </div>
      `;

  card_3.innerHTML = `
      <div class="image"><img class="image-card" width="70%" src="${Grouping_1.img}" alt="picture" title="picture"></div>
      <div class="content">
          <a href="#">
              <span class="title">${Grouping_3.name}</span>
          </a>
      
          <p class="desc">
          ${Grouping_3.desc}
          </p>
      
          <a class="action" href="#">
              اطلاعات بیشتر
              <span aria-hidden="true">
                  →
              </span>
          </a>
      </div>
      `;

  card_4.innerHTML = `
      <div class="image"><img class="image-card" width="70%" src="${Grouping_4.img}" alt="picture" title="picture"></div>
      <div class="content">
          <a href="#">
              <span class="title">${Grouping_4.name}</span>
          </a>
      
          <p class="desc">
          ${Grouping_4.desc}
          </p>
      
          <a class="action" href="#">
              اطلاعات بیشتر
              <span aria-hidden="true">
                  →
              </span>
          </a>
      </div>
      `;

  card_5.innerHTML = `
      <div class="image"><img class="image-card" width="70%" src="${Grouping_5.img}" alt="picture" title="picture"></div>
      <div class="content">
          <a href="#">
              <span class="title">${Grouping_5.name}</span>
          </a>
      
          <p class="desc">
          ${Grouping_5.desc}
          </p>
      
          <a class="action" href="#">
              اطلاعات بیشتر
              <span aria-hidden="true">
                  →
              </span>
          </a>
      </div>
      `;

  card_6.innerHTML = `
      <div class="image"><img class="image-card" width="70%" src="${Grouping_6.img}" alt="picture" title="picture"></div>
      <div class="content">
          <a href="#">
              <span class="title">${Grouping_6.name}</span>
          </a>
      
          <p class="desc">
          ${Grouping_6.desc}
          </p>
      
          <a class="action" href="#">
              اطلاعات بیشتر
              <span aria-hidden="true">
                  →
              </span>
          </a>
      </div>
      `;

  // Comment

  card_Comments_1.innerHTML = `
      <div class="card-Comments">
          <div class="header">
              <div class="image"><img style="scale: .045;" src="${Comments_1.img}" alt="picture-user" title="picture-user"></div>
              <div class="date-comment">${Comments_1.date}</div>
              <div>
                  <div class="stars">
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                       <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg> 
                  </div>
                  <p class="name">${Comments_1.name}</p>
              </div>
          </div>
          <p class="message">${Comments_1.Comment}</p>
      </div>
      `;

  card_Comments_2.innerHTML = `
      <div class="card-Comments">
          <div class="header">
              <div class="image"><img style="scale: .105;" src="${Comments_2.img}" alt="picture-user" title="picture-user"></div>
              <div class="date-comment">${Comments_2.date}</div>
              <div>
                  <div class="stars">
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                       <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg> 
                  </div>
                  <p class="name">${Comments_2.name}</p>
              </div>
          </div>
          <p class="message">${Comments_2.Comment}</p>
      </div>
      `;

  card_Comments_3.innerHTML = `
      <div class="card-Comments">
          <div class="header">
              <div class="image"><i class='bi bi-person'></i></div>
              <div class="date-comment">${Comments_3.date}</div>
              <div>
                  <div class="stars">
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                       <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg> 
                  </div>
                  <p class="name">${Comments_3.name}</p>
              </div>
          </div>
          <p class="message">${Comments_3.Comment}</p>
      </div>
      `;

  card_Comments_4.innerHTML = `
      <div class="card-Comments">
          <div class="header">
              <div class="image"><img style="scale: .105;" src="${Comments_4.img}" alt="picture-user" title="picture-user"></div>
              <div class="date-comment">${Comments_4.date}</div>
              <div>
                  <div class="stars">
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                  </div>
                  <p class="name">${Comments_4.name}</p>
              </div>
          </div>
          <p class="message">${Comments_4.Comment}</p>
      </div>
      `;

  card_Comments_5.innerHTML = `
      <div class="card-Comments">
          <div class="header">
              <div class="image"><img style="scale: .355;" src="${Comments_5.img}" alt="picture-user" title="picture-user"></div>
              <div class="date-comment">${Comments_5.date}</div>
              <div>
                  <div class="stars">
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                      <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg>
                       <svg fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                      </svg> 
                  </div>
                  <p class="name">${Comments_5.name}</p>
              </div>
          </div>
          <p class="message">${Comments_5.Comment}</p>
      </div>
      `;
  // form send Comment

  //   let menu_hamburger = $(".menu-hamburger");
  //   let sub_menu = $(".sub-menu");
  //   let line_one = $(".line-one");
  //   let line_two = $(".line-two");
  //   let line_tree = $(".line-tree");
  //   let slider_menu = $(".slider-menu");

  $(".action").click(function () {
    $(".container-error").css({
      position: "fixed",
      top: "5rem",
    });
    $(".error__close").click(function () {
      $(".container-error").css({
        position: "fixed",
        top: "-5rem",
      });
    });
  });

  $(".banner-btn").click(function () {
    $(".container-error").css({
      position: "fixed",
      top: "5rem",
    });
    $(".error__close").click(function () {
      $(".container-error").css({
        position: "fixed",
        top: "-5rem",
      });
    });
  });

  $(".btn-send-Comment").click(function () {
    $(".container-send-Comment").css({
      position: "fixed",
      right: "0",
      transition: ".7s",
    });
  });

  $(".back-send-form-btn").click(function () {
    $(".container-send-Comment").css({
      position: "fixed",
      right: "-100%",
      transition: ".7s",
    });
  });

  // swiper
  var swiperEl = document.querySelector(".mySwiper");
  Object.assign(swiperEl, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
  swiperEl.initialize();
});
