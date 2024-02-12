import "./global.css";

import styleApp from "./style.module.css";

export function App() {
  return (
    <div className={styleApp.main_container}>
      <div className={styleApp.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-sm-12 col-md-4">
            <input style={{width: "100%"}} type="text" />
          </div>
        </div>
      </div>
      <div className={styleApp.tv_show_detail}>Détails</div>
      <div className={styleApp.recommendations}>recommendations</div>
    </div>
  );
}
