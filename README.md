play-require-jsx-react
======================
Sample Play project demonstrating a problem with the integration of React javascript library. The application works after moving app.js and Component.js files from app/assets/javascripts to public/javascripts but that means they won't be optimized by the built in requirejs support in Play in production mode.