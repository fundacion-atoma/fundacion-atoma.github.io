# Fundación Atóma Website

This is the official website for Fundación Atóma, built with Jekyll and hosted on GitHub Pages.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Ruby** version 2.7.0 or higher, including all development headers
- **RubyGems** (check your Gems version using `gem -v`)
- **GCC and Make** (check versions using `gcc -v`, `g++ -v`, and `make -v`)
- **Git**

## Installation

For detailed install instructions, follow the guide for your operating system from the [official Jekyll documentation](https://jekyllrb.com/docs/installation/):

- [macOS](https://jekyllrb.com/docs/installation/macos/)
- [Ubuntu](https://jekyllrb.com/docs/installation/ubuntu/)
- [FreeBSD](https://jekyllrb.com/docs/installation/freebsd/)
- [Other Linux](https://jekyllrb.com/docs/installation/other-linux/)
- [Windows](https://jekyllrb.com/docs/installation/windows/)

### Installing Bundler
```bash
gem install bundler
```

## Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/fundacion-atoma/fundacion-atoma.github.io.git
   cd fundacion-atoma.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

## Running the Development Server

1. **Start the Jekyll development server**
   ```bash
   bundle exec jekyll serve
   ```

2. **Access the website**
   - Open your browser and navigate to `http://localhost:4000`
   - The site will automatically reload when you make changes to the source files

## Building for Production

To build the site for production:

```bash
bundle exec jekyll build
```

The built site will be available in the `_site` directory.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. No additional configuration is needed.

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _includes/          # Reusable HTML components
├── _layouts/           # Page templates
├── _posts/             # Blog posts
├── assets/             # CSS, JS, and font files
├── Gemfile             # Ruby dependencies
└── *.html              # Individual pages
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

- Email: fundacionatoma@gmail.com
- Twitter: [@fundacion-atoma](https://twitter.com/fundacion-atoma)
- GitHub: [fundacion-atoma](https://github.com/fundacion-atoma)

## License

This project is open source and available under the [MIT License](LICENSE).
