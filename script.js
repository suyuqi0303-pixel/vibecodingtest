// OpenWeatherMap API 密钥（使用免费 API）
const API_KEY = '893e95b97f6f9b9c42bfd3991ba67038';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM 元素
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContainer = document.getElementById('weatherContainer');
const errorMessage = document.getElementById('errorMessage');
const loadingSpinner = document.getElementById('loadingSpinner');
const suggestedCities = document.getElementById('suggestedCities');
const cityButtons = document.querySelectorAll('.city-btn');

// 天气图标映射
const weatherIcons = {
    '01d': '☀️',
    '01n': '🌙',
    '02d': '🌤️',
    '02n': '🌤️',
    '03d': '☁️',
    '03n': '☁️',
    '04d': '☁️',
    '04n': '☁️',
    '09d': '🌧️',
    '09n': '🌧️',
    '10d': '🌦️',
    '10n': '🌧️',
    '11d': '⛈️',
    '11n': '⛈️',
    '13d': '❄️',
    '13n': '❄️',
    '50d': '🌫️',
    '50n': '🌫️'
};

// 事件监听
searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

cityButtons.forEach(button => {
    button.addEventListener('click', () => {
        const city = button.getAttribute('data-city');
        cityInput.value = city;
        searchWeather();
    });
});

// 显示热门城市建议
function showSuggestedCities() {
    if (weatherContainer.children.length === 0) {
        suggestedCities.style.display = 'block';
    } else {
        suggestedCities.style.display = 'none';
    }
}

// 搜索天气
async function searchWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('请输入城市名称');
        return;
    }

    try {
        showLoading(true);
        clearError();
        
        const response = await fetch(
            `${API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=zh_cn`
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('未找到该城市，请检查城市名称是否正确');
            } else if (response.status === 401) {
                throw new Error('API 密钥无效');
            } else {
                throw new Error('获取天气数据失败，请稍后重试');
            }
        }

        const data = await response.json();
        displayWeather(data);
        suggestedCities.style.display = 'none';
    } catch (error) {
        showError(error.message);
        console.error('Error:', error);
    } finally {
        showLoading(false);
    }
}

// 显示天气信息
function displayWeather(data) {
    const { name, sys, main, weather, wind, clouds } = data;
    const icon = weatherIcons[weather[0].icon] || '🌡️';
    const country = sys.country;
    const temp = Math.round(main.temp);
    const feelsLike = Math.round(main.feels_like);
    const humidity = main.humidity;
    const windSpeed = wind.speed;
    const cloudiness = clouds.all;
    const description = weather[0].description;

    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';
    weatherCard.innerHTML = `
        <div class="weather-header">
            <div>
                <div class="city-name">${name}, ${country}</div>
            </div>
            <div class="weather-icon">${icon}</div>
        </div>
        <div class="temperature">${temp}°C</div>
        <div class="weather-description">${description}</div>
        <div class="weather-details">
            <div class="detail-item">
                <div class="detail-label">体感温度</div>
                <div class="detail-value">${feelsLike}°C</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">湿度</div>
                <div class="detail-value">${humidity}%</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">风速</div>
                <div class="detail-value">${windSpeed} m/s</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">云量</div>
                <div class="detail-value">${cloudiness}%</div>
            </div>
        </div>
    `;

    weatherContainer.innerHTML = '';
    weatherContainer.appendChild(weatherCard);
}

// 显示加载状态
function showLoading(show) {
    loadingSpinner.style.display = show ? 'block' : 'none';
}

// 显示错误信息
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// 清除错误信息
function clearError() {
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
}

// 页面加载时显示热门城市
window.addEventListener('load', () => {
    showSuggestedCities();
});