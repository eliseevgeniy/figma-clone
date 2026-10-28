<!-- app/components/FooterSection.vue -->
<template>
  <footer class="footer-bg text-white py-16 mt-16">
    <v-container style="max-width: 1300px;">
      
      <v-row>
        <!-- ЛЕВАЯ ЧАСТЬ: Логотип и соцсети -->
        <v-col cols="12" md="3" class="mb-8 mb-md-0">
          <h2 class="text-h4 font-weight-bold mb-6" style="letter-spacing: -1px;">Figma</h2>
          
          <!-- Иконки соцсетей (имитация) -->
          <div class="d-flex gap-3">
            <v-btn icon variant="outlined" size="small" class="social-btn rounded-circle border-grey">
            <!-- Официальный SVG-логотип X -->
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            </v-btn>
            <v-btn icon variant="outlined" size="small" class="social-btn rounded-circle border-grey">
              <v-icon size="16">mdi-youtube</v-icon>
            </v-btn>
            <v-btn icon variant="outlined" size="small" class="social-btn rounded-circle border-grey">
              <v-icon size="16">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon variant="outlined" size="small" class="social-btn rounded-circle border-grey">
              <v-icon size="16">mdi-facebook</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- ПРАВАЯ ЧАСТЬ: Колонки со ссылками -->
        <v-col cols="12" md="9">
          <v-row>
            
            <!-- Колонка 1: Product & Plans -->
            <v-col cols="6" sm="3">
              <h3 class="text-caption font-weight-bold text-grey-lighten-1 mb-4 text-uppercase" style="letter-spacing: 1px;">Product</h3>
              <ul class="footer-list mb-8">
                <li v-for="link in productLinks" :key="link.name">
                  <a href="#" class="footer-link">
                    {{ link.name }}
                    <!-- Плашка NEW / BETA -->
                    <span v-if="link.tag" class="tag-badge ml-2">{{ link.tag }}</span>
                  </a>
                </li>
              </ul>

              <h3 class="text-caption font-weight-bold text-grey-lighten-1 mb-4 text-uppercase" style="letter-spacing: 1px;">Plans</h3>
              <ul class="footer-list">
                <li v-for="link in planLinks" :key="link">
                  <a href="#" class="footer-link">{{ link }}</a>
                </li>
              </ul>
            </v-col>

            <!-- Колонка 2: Use Cases -->
            <v-col cols="6" sm="3">
              <h3 class="text-caption font-weight-bold text-grey-lighten-1 mb-4 text-uppercase" style="letter-spacing: 1px;">Use Cases</h3>
              <ul class="footer-list">
                <li v-for="link in useCaseLinks" :key="link">
                  <a href="#" class="footer-link">{{ link }}</a>
                </li>
              </ul>
            </v-col>

            <!-- Колонка 3: Resources -->
            <v-col cols="6" sm="3">
              <h3 class="text-caption font-weight-bold text-grey-lighten-1 mb-4 text-uppercase" style="letter-spacing: 1px;">Resources</h3>
              <ul class="footer-list">
                <li v-for="link in resourceLinks" :key="link">
                  <a href="#" class="footer-link">{{ link }}</a>
                </li>
              </ul>
            </v-col>

            <!-- Колонка 4: Company -->
            <v-col cols="6" sm="3">
              <h3 class="text-caption font-weight-bold text-grey-lighten-1 mb-4 text-uppercase" style="letter-spacing: 1px;">Company</h3>
              <ul class="footer-list">
                <li v-for="link in companyLinks" :key="link">
                  <a href="#" class="footer-link">{{ link }}</a>
                </li>
              </ul>
            </v-col>

          </v-row>
        </v-col>
      </v-row>

      <!-- НИЖНЯЯ ПАНЕЛЬ (Копирайт и язык) -->
      <div class="d-flex align-center mt-12 pt-6 border-t-dark">
        <a href="#" class="footer-link text-caption mr-4">Cookie settings</a>
        <span class="text-grey-darken-1 mr-4 text-caption">|</span>
        <a href="#" class="footer-link text-caption d-flex align-center">
          <v-icon size="16" class="mr-1">mdi-web</v-icon> English <v-icon size="16" class="ml-1">mdi-chevron-down</v-icon>
        </a>
      </div>

    </v-container>
  </footer>
</template>

<script setup>
// Данные для ссылок, чтобы не загромождать HTML
const productLinks = [
  { name: 'Figma Design' },
  { name: 'Figma Make' },
  { name: 'Figma Weave', tag: 'NEW' },
  { name: 'Dev Mode' },
  { name: 'Figma Motion', tag: 'NEW' },
  { name: 'Figma Specs', tag: 'BETA' },
  { name: 'FigJam' },
  { name: 'Figma Slides' },
  { name: 'Figma Draw' },
  { name: 'Figma Sites', tag: 'BETA' },
  { name: 'Figma Buzz', tag: 'BETA' },
  { name: 'Figma agent' },
  { name: 'Design and explore' },
  { name: 'Build and ship products' },
  { name: 'AI workflows' },
  { name: 'Release notes' },
  { name: 'Downloads' },
];

const planLinks = ['Pricing', 'Enterprise', 'Organization', 'Professional'];

const useCaseLinks = [
  'UI design', 'UX design', 'Wireframing', 'Diagramming', 'Prototyping',
  'Brainstorming', 'Presentation Maker', 'Online whiteboard', 'Strategic planning',
  'Mind mapping', 'AI website generator', 'AI design generator', 'AI app builder',
  'AI UI generator', 'Weave AI tool'
];

const resourceLinks = [
  'Blog', 'Best practices', 'Gradient Library', 'Gradient Generator', 'GIF maker',
  'Color wheel', 'Colors', 'Color picker', 'Font Library', 'Templates', 'Developers',
  'Integrations', 'Affiliate program', 'Resource library', 'Reports and insights',
  'Support', 'Status', 'Legal and privacy', 'Modern slavery statement',
  'Climate disclosure statement', 'Impressum'
];

const companyLinks = ['Events', 'Customers', 'Careers', 'Newsroom', 'Brand assets'];
</script>

<style scoped>
/* Темный фон подвала */
.footer-bg {
  background-color: #000000;
  color: #ffffff;
}

/* Стили для списков ссылок */
.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 12px;
}

/* Стили для ссылок */
.footer-link {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* Плашки NEW / BETA */
.tag-badge {
  background-color: #333333;
  color: #aaaaaa;
  font-size: 0.6rem;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  vertical-align: middle;
}

/* Кнопки соцсетей */
.border-grey {
  border-color: #333333 !important;
}
.social-btn:hover {
  background-color: #333333 !important;
}

/* Разделитель внизу */
.border-t-dark {
  border-top: 1px solid #222222;
}
</style>