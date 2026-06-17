# AI Interview Simulator

An interactive web application that simulates real-world job interviews using AI. Practice your interview skills with realistic scenarios and get instant feedback.

## Features

- 🤖 **AI-Powered Interviews** - Intelligent interview questions tailored to different roles
- 💬 **Real-time Responses** - Get instant feedback on your answers
- 📊 **Interview Analytics** - Track your performance and improvement over time
- 🎯 **Multiple Roles** - Practice for various job positions
- 🌐 **Web-Based** - Access from anywhere, no installation required

## Tech Stack

- **Frontend**: Next.js 14, React, CSS Modules
- **Backend**: Node.js, API Routes
- **Database**: JSON-based storage
- **Styling**: CSS3
- **Linting**: ESLint

## Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NETHIN163/AI-Interview-Simulatior.git
   cd AI-Interview-Simulatior
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. Start the application with `npm run dev`
2. Navigate to the interview page
3. Select a job role or position
4. Answer the AI-generated interview questions
5. Receive feedback and see your performance metrics
6. Practice multiple times to improve

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── interview/
│   │   │       └── route.js       # Interview API endpoint
│   │   ├── interview/
│   │   │   └── page.js            # Interview page
│   │   ├── layout.js              # Root layout
│   │   ├── page.js                # Home page
│   │   ├── page.module.css        # Home styles
│   │   └── globals.css            # Global styles
│   └── database/
│       └── db.json                # Database file
├── public/                        # Static files
├── next.config.mjs                # Next.js configuration
├── jsconfig.json                  # JS config
├── package.json                   # Dependencies
└── eslint.config.mjs              # ESLint config
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] User authentication and accounts
- [ ] Interview history and detailed analytics
- [ ] More interview scenarios and industries
- [ ] Video recording of responses
- [ ] AI-powered score improvements
- [ ] Mobile app support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email your-email@example.com or open an issue on GitHub.

## Author

**NETHIN163**
- GitHub: [@NETHIN163](https://github.com/NETHIN163)

---

**Happy interviewing! 🚀**