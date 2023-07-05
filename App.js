class HomeComponent extends ElComponent {
    constructor() {
        super({
            el: '#app',
            template: `
            <nav class="bg-gray-500">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex-shrink-0">
                        <a href="#" class="text-white font-bold text-xl">DarkTube</a>
                    </div>
                    <div>
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="/"
                                class="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="/about"
                                class="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        </div>
                    </div>
                </div>
            </div>
    
        </nav>
        <div class="flex items-center justify-center mt-10 mb-8">
            <div class="bg-white shadow-md rounded-lg px-8 py-6 mb-4 w-full md:w-3/4 lg:w-1/2">
                <h1 class="text-3xl font-semibold mb-2 text-center">DarkTube</h1>
                <h2 class="font-semibold mb-6 text-center">YouTube Downloader</h2>
                <form id="download-form" class="space-y-4">
                    <div>
                        <label class="block text-gray-700 text-sm font-semibold mb-2" for="video-url">
                            Video URL
                        </label>
                        <input
                            class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="video-url" type="text" placeholder="Enter YouTube video URL" required />
                    </div>
                    <div>
                        <label class="block text-gray-700 text-sm font-semibold mb-2" for="video-format">
                            Format
                        </label>
                        <select
                            class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="video-format">
                            <option selected value="1080">MP4 - 1080</option>
                            <option value="720">MP4 - 720</option>
                            <option value="480">MP4 - 480</option>
                            <option value="360">MP4 - 360</option>
                            <option value="4k">MP4 - 4K</option>
                            <option value="8k">MP4 - 8K</option>
                            <option value="mp3">MP3</option>
                            <option value="m4a">M4A</option>
                            <option value="webm_audio">WEBM Audio</option>
                            <option value="aac">AAC</option>
                            <option value="flac">FLAC</option>
                            <option value="opus">OPUS</option>
                            <option value="ogg">OGG</option>
                            <option value="wav">WAV</option>
                        </select>
                    </div>
                    <div>
                        <button id="download-button"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit">
                            Download
                        </button>
                    </div>
                </form>
                <div id="loader-to" class="hidden">
                    <div class="flex justify-center">
                        <div class="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <iframe scrolling="no" src="" frameborder="0" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
        <footer class="bg-gray-800 py-4 fixed bottom-0 left-0 right-0">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap items-center justify-between">
                    <div class="w-full md:w-auto text-center text-gray-500">
                        <span class="font-bold text-white">DarkTube</span>
                    </div>
                    <div class="flex justify-center text-center mt-4 md:mt-0">
                        <a href="/" class="text-gray-500 hover:text-white px-3 py-2">Home</a>
                        <a href="/about" class="text-gray-500 hover:text-white px-3 py-2">About</a>
                        <a href="https://www.mahbadgroup.ir" class="text-gray-500 hover:text-white px-3 py-2">Ads</a>
                    </div>
                </div>
                <div class="w-full text-center text-gray-500 mt-4 md:mt-0">
                    <p>&copy; 2023 DarkTube. All rights reserved.</p>
                    <p class="ml-2">Built by <a href="https://t.me/h3dev" class="text-gray-500 hover:text-white">Hossein
                            Pira</a></p>
                </div>
            </div>
        </footer>
        `,
            data: {}
        });
    }
}

class AboutComponent extends ElComponent {
    constructor() {
        super({
            el: '#app',
            template: `
            <nav class="bg-gray-500">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex-shrink-0">
                        <a href="#" class="text-white font-bold text-xl">DarkTube</a>
                    </div>
                    <div>
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="/"
                                class="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="/about"
                                class="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                        </div>
                    </div>
                </div>
            </div>
    
        </nav>
        <section class="bg-white About min-h-full justify-center items-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="w-full">
                        <h2 class="text-3xl font-bold mb-4">About Us</h2>
                        <p class="text-gray-500 leading-relaxed">
                        Welcome to DarkTube, the ultimate YouTube video downloader!
                        <br>
                        DarkTube is the perfect tool for anyone who wants to download YouTube videos quickly and easily. With DarkTube, you can download videos in any format you want, including MP4 and MP3, and best of all, it's completely free and unlimited!
                        <br><br>
                        DarkTube was developed by Hossein Pira, a talented developer with a passion for creating useful and innovative applications. If you have any questions or feedback about DarkTube, feel free to reach out to Hossein at h3dev.pira@gmail.com. He is always happy to hear from users and help in any way he can.
                        <br><br>
                        Whether you want to download videos for offline viewing or to save your favorite music, DarkTube makes it easy and convenient. So why wait? Try DarkTube today and experience the ultimate YouTube video downloading experience!
                        </p><br>
                    </div>
                </div>
            </div>
        </section>
        <footer class="bg-gray-800 py-4 fixed bottom-0 left-0 right-0">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap items-center justify-between">
                    <div class="w-full md:w-auto text-center text-gray-500">
                        <span class="font-bold text-white">DarkTube</span>
                    </div>
                    <div class="flex justify-center text-center mt-4 md:mt-0">
                        <a href="/" class="text-gray-500 hover:text-white px-3 py-2">Home</a>
                        <a href="/about" class="text-gray-500 hover:text-white px-3 py-2">About</a>
                        <a href="https://www.mahbadgroup.ir" class="text-gray-500 hover:text-white px-3 py-2">Ads</a>
                    </div>
                </div>
                <div class="w-full text-center text-gray-500 mt-4 md:mt-0">
                    <p>&copy; 2023 DarkTube. All rights reserved.</p>
                    <p class="ml-2">Built by <a href="https://t.me/h3dev" class="text-gray-500 hover:text-white">Hossein
                            Pira</a></p>
                </div>
            </div>
        </footer>
        `,
            data: {}
        });
    }
}

const router = new ElRouter({
    routes: [
        { route: '/', component: HomeComponent },
        { route: '/about', component: AboutComponent }
    ],
    defaultRoute: '/',
    errorRoute: '/',
});