import "./styles.scss";

document.getElementById("app").innerHTML = `
<div class="wrapper">
        <div class="navbar">
            <div class="navbar__item -blue">
                <span class="navbar__icon">
                    <svg class="icon">
                      <use xlink:href="#icon-home"></use>
                    </svg>
                </span>
            </div>
            <div class="navbar__item -orange">
                <span class="navbar__icon">
                    <svg class="icon">
                      <use xlink:href="#icon-cup"></use>
                    </svg>
                </span>
            </div>
            <div class="navbar__item -navy-blue">
                <span class="navbar__icon">
                    <svg class="icon">
                      <use xlink:href="#icon-plus"></use>
                    </svg>
                </span>
            </div>
            <div class="navbar__item -yellow">
                <span class="navbar__icon">
                    <svg class="icon">
                      <use xlink:href="#icon-search"></use>
                    </svg>
                </span>
            </div>
        </div>
    </div>
  <svg style="display:none" xmlns="http://www.w3.org/2000/svg" hidden xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <symbol id="icon-plus" viewBox="0 0 32 32">
        <title>plus</title>
        <path d="M32 14.4v3.2c0 0.8-0.64 1.44-1.44 1.44h-11.68v11.52c0 0.8-0.64 1.44-1.44 1.44h-3.040c-0.8 0-1.44-0.64-1.44-1.44v-11.52h-11.52c-0.8 0-1.44-0.64-1.44-1.44v-3.2c0-0.8 0.64-1.44 1.44-1.44h11.68v-11.52c-0.16-0.8 0.48-1.44 1.28-1.44h3.2c0.8 0 1.44 0.64 1.44 1.44v11.68h11.68c0.64-0.16 1.28 0.48 1.28 1.28z"></path>
      </symbol>
      <symbol id="icon-search" viewBox="0 0 32 32">
      <title>search</title>
        <path d="M30.56 28.64l-5.76-5.76c2.24-2.4 3.52-5.6 3.52-9.12 0-7.52-6.24-13.76-13.76-13.76s-13.76 6.24-13.76 13.76 6.24 13.76 13.76 13.76c2.72 0 5.12-0.8 7.36-2.080l6.080 6.080c0.32 0.32 0.8 0.48 1.28 0.48s0.96-0.16 1.28-0.48c0.8-0.8 0.8-2.080 0-2.88zM4.64 13.76c0-5.44 4.48-9.92 9.92-9.92s9.92 4.48 9.92 9.92-4.48 9.92-9.92 9.92-9.92-4.48-9.92-9.92z"></path>
      </symbol>
      <symbol id="icon-cup" viewBox="0 0 32 32">
        <title>cup</title>
        <path d="M28 4h-1.28v-2.72c0-0.8-0.64-1.28-1.28-1.28h-18.72c-0.8 0-1.44 0.64-1.44 1.28v2.72h-1.28c-2.24 0-4 1.76-4 4v1.28c0 2.24 1.76 4 4 4h1.76c0.8 3.2 3.2 5.92 6.24 7.2v3.52h-1.28c-2.24 0-4 1.76-4 4v2.72c0 0.64 0.48 1.28 1.28 1.28h16c0.8 0 1.28-0.64 1.28-1.28v-2.72c0-2.24-1.76-4-4-4h-1.28v-3.52c3.2-1.28 5.44-4 6.4-7.2h1.6c2.24 0 4-1.76 4-4v-1.28c0-2.24-1.76-4-4-4zM4 10.72c-0.8 0-1.28-0.64-1.28-1.44v-1.28c0-0.8 0.64-1.28 1.28-1.28h1.28v4h-1.28zM22.72 28v1.28h-13.44v-1.28c0-0.8 0.64-1.28 1.28-1.28h10.72c0.8 0 1.44 0.48 1.44 1.28zM17.28 24h-2.56v-2.72c0.96 0.16 1.76 0.16 2.72 0v2.72zM16 18.72c-4.48 0-8-3.52-8-8v-8h16v8c0 4.32-3.52 8-8 8zM29.28 9.28c0 0.8-0.64 1.28-1.28 1.28h-1.28v-3.84h1.28c0.8 0 1.28 0.64 1.28 1.28v1.28z"></path>
      </symbol>
      <symbol id="icon-home" viewBox="0 0 32 32">
        <title>home</title>
        <path d="M16 4.48l12.48 9.92v14.080h-24.96v-14.080l12.48-9.92zM16 0.48l-15.52 12.48v18.72h31.040v-18.72l-15.52-12.48z"></path>
        <path d="M32 32h-32v-19.2l16-12.8 16 12.8v19.2zM0.8 31.2h30.4v-18.080l-15.2-12.16-15.2 12.16v18.080zM28.8 28.8h-25.6v-14.56l12.8-10.24 12.8 10.24v14.56zM4 28h24.16v-13.44l-12-9.6-12 9.6v13.44z"></path>
      </symbol>
    </defs>
  </svg>
`;


