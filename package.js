Package.describe({
  summary : "Bootstrap Column Equalizer",
  version : "1.3.0",
  git     : "https://github.com/sylido/bootstrap-colequalizer.git",
  name    : "sylido:bootstrap-colequalizer"
});

Package.on_use(function(api) {
  api.versionsFrom("1.6.1");
  api.use("slayerokk:jquery", "client");
  api.use("sylido:bootstrap-scss", "client");
  api.add_files("bootstrap-colequalizer.js", "client");
});
