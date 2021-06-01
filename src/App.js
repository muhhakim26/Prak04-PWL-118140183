import { Helmet } from "react-helmet";
import jsonld from "./jsonld.json";
import { data } from "./dummy";
const App = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonld)}</script>
      </Helmet>
      <div>
        <div id="movie-card-list">
          <div class="movie-card">
            <div class="color-overlay">
              <div class="movie-content">
                <div class="movie-header">
                  <h1 class="movie-title">Fumetsu no Anata e</h1>
                  <h4 class="movie-info">(2021) Adventure, Drama </h4>
                </div>
                <p class="movie-desc">
                  "Makhluk abadi misterius dikirim ke Bumi tanpa emosi ataupun
                  identitas. Tapi, ia mampu mengambil bentuk apapun yang berada
                  di sekitarnya yang memiliki dorongan kuat, sampai ia bertemu
                  dengan seorang anak laki-laki."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
