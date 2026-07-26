# 🌍 全球天气查询应用

一个简单优雅的网页应用，用于查询全球各地的实时天气信息。

## 功能特性

✨ **核心功能**
- 🔍 搜索全球任意城市的实时天气
- 🌡️ 显示温度、体感温度、天气描述
- 💧 显示湿度、风速、云量等详细信息
- 🎨 漂亮的天气图标和响应式设计
- 📱 完全支持移动设备

## 技术栈

- **前端**：HTML5、CSS3、Vanilla JavaScript
- **API**：OpenWeatherMap 免费 API
- **部署**：可直接在浏览器打开或部署到任何静态托管服务
- **跨平台支持**：Windows、macOS、Linux 完全支持

## 快速开始

### 方式1：直接打开

1. 克隆或下载本项目
```bash
git clone https://github.com/suyuqi0303-pixel/vibecodingtest.git
cd vibecodingtest
```

2. 在浏览器中打开 `index.html` 文件

### 方式2：使用本地服务器

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (需要安装 http-server)
npx http-server

# 使用 PHP
php -S localhost:8000
```

然后在浏览器中访问 `http://localhost:8000`

## Linux 系统部署指南

### 系统要求

✅ **支持的 Linux 发行版**：
- Ubuntu (20.04+)
- Debian (10+)
- CentOS (7+)
- Fedora (30+)
- 其他主流 Linux 发行版

✅ **环境要求**：
- 现代 Web 浏览器（Firefox、Chrome、Chromium）
- Git（用于克隆项目）
- Python 3 / Node.js / PHP（任选其一）

### 部署步骤

#### **步骤 1：克隆项目**

```bash
# 打开终端，使用 Git 克隆项目
git clone https://github.com/suyuqi0303-pixel/vibecodingtest.git

# 进入项目目录
cd vibecodingtest
```

#### **步骤 2：选择运行方式**

##### **方案 A：使用 Python（推荐 - 无需额外安装）**

```bash
# Python 3.x（推荐）
python3 -m http.server 8000

# 或使用 python
python -m http.server 8000

# Python 2.x（旧版本）
python -m SimpleHTTPServer 8000
```

##### **方案 B：使用 Node.js**

```bash
# 首先全局安装 http-server
npm install -g http-server

# 在项目目录运行
http-server

# 或指定端口
http-server -p 8000
```

##### **方案 C：使用 PHP（需要先安装 PHP）**

```bash
# Ubuntu/Debian 安装 PHP
sudo apt-get update
sudo apt-get install php

# 运行开发服务器
php -S localhost:8000
```

##### **方案 D：直接在浏览器打开**

```bash
# 直接用浏览器打开本地文件
firefox index.html
# 或
google-chrome index.html
# 或
chromium index.html
```

#### **步骤 3：访问应用**

打开浏览器，访问以下地址之一：

- **本地访问**：`http://localhost:8000`
- **网络访问**（同一局域网）：`http://<你的IP>:8000`
  - 查看 IP 地址：`hostname -I`

### Ubuntu/Debian 完整示例

```bash
# 1. 更新系统包
sudo apt-get update

# 2. 安装 Git（如果未安装）
sudo apt-get install git

# 3. 克隆项目
git clone https://github.com/suyuqi0303-pixel/vibecodingtest.git
cd vibecodingtest

# 4. 使用 Python 启动服务器
python3 -m http.server 8000

# 5. 在浏览器中打开：http://localhost:8000
```

### CentOS/Fedora 完整示例

```bash
# 1. 更新系统包
sudo yum update

# 2. 安装 Git（如果未安装）
sudo yum install git

# 3. 克隆项目
git clone https://github.com/suyuqi0303-pixel/vibecodingtest.git
cd vibecodingtest

# 4. 使用 Python 启动服务器
python3 -m http.server 8000

# 5. 在浏览器中打开：http://localhost:8000
```

### 创建后台运行脚本（可选）

如果想让应用在后台持续运行，可以创建一个启动脚本：

```bash
# 创建启动脚本
cat > start.sh << 'EOF'
#!/bin/bash
cd $(dirname "$0")
python3 -m http.server 8000 > server.log 2>&1 &
echo "服务器已启动，访问 http://localhost:8000"
EOF

# 给脚本添加执行权限
chmod +x start.sh

# 运行脚本
./start.sh

# 查看日志
tail -f server.log

# 停止服务器（如果需要）
pkill -f "http.server"
```

### 使用 Systemd 服务（高级）

```bash
# 创建 systemd 服务文件
sudo nano /etc/systemd/system/weather-app.service
```

在文件中添加以下内容：

```ini
[Unit]
Description=Weather App
After=network.target

[Service]
Type=simple
User=your_username
WorkingDirectory=/path/to/vibecodingtest
ExecStart=/usr/bin/python3 -m http.server 8000
Restart=always

[Install]
WantedBy=multi-user.target
```

然后运行：

```bash
# 启用服务
sudo systemctl enable weather-app.service

# 启动服务
sudo systemctl start weather-app.service

# 查看状态
sudo systemctl status weather-app.service

# 停止服务
sudo systemctl stop weather-app.service

# 查看日志
sudo journalctl -u weather-app.service -f
```

### Linux 常见问题排查

**Q1：提示"端口被占用"**
```bash
# 查看哪个进程占用了 8000 端口
lsof -i :8000
# 或使用其他端口
python3 -m http.server 9000
```

**Q2：无法访问 http://localhost:8000**
```bash
# 检查防火墙设置
sudo firewall-cmd --add-port=8000/tcp
# 或
sudo ufw allow 8000
```

**Q3：提示 Python 找不到**
```bash
# 检查 Python 版本
python --version
python3 --version

# 如果没有安装 Python
sudo apt-get install python3
```

**Q4：API 响应缓慢**
```bash
# 检查网络连接
ping api.openweathermap.org

# 检查 DNS 设置
nslookup api.openweathermap.org
```

## 使用方法

1. **搜索城市**
   - 在输入框中输入城市名称（支持中文和英文）
   - 点击搜索按钮或按 Enter 键
   - 等待天气数据加载

2. **热门城市快捷查询**
   - 页面下方有 8 个热门城市按钮
   - 点击任何按钮快速查看该城市天气

## 项目结构

```
.
├── index.html      # 主 HTML 文件
├── style.css       # 样式文件
├── script.js       # JavaScript 功能脚本
├── start.sh        # Linux 启动脚本（可选）
└── README.md       # 项目说明文档
```

## API 说明

本项目使用 OpenWeatherMap 提供的免费 API：

- **API 端点**：`https://api.openweathermap.org/data/2.5/weather`
- **API 密钥**：已内置（有免费额度）
- **数据更新频率**：实时
- **支持语言**：中文、英文等多种语言

## 支持的城市

可以查询全球任意城市的天气，包括但不限于：

- 中国：北京、上海、广州、深圳、成都等
- 美国：纽约、洛杉矶、芝加哥、旧金山等
- 欧洲：伦敦、巴黎、柏林、罗马等
- 亚洲：东京、首尔、新加坡、曼谷等
- 其他：悉尼、墨尔本、多伦多等

## 功能展示

### 搜索功能
- 输入城市名称
- 支持回车快速搜索
- 实时加载提示

### 天气显示
- 城市名称和国家代码
- 当前温度（大字显示）
- 天气描述和对应的 emoji 图标
- 详细天气参数：
  - 体感温度
  - 湿度百分比
  - 风速（m/s）
  - 云量百分比

### 用户体验
- 加载动画
- 错误提示
- 热门城市快捷按钮
- 响应式设计
- 平滑的动画过渡

## 样式特点

- 🎨 现代渐变配色（紫色系）
- ✨ 平滑的动画和过渡效果
- 📱 完全响应式设计
- 💬 卡片式布局
- 🎯 直观的用户交互

## 浏览器兼容性

- Chrome（推荐）
- Firefox
- Safari
- Edge
- 移动浏览器
- 所有支持 ES6 的现代浏览器

## 系统兼容性

✅ **完全支持**
- Windows 10/11
- macOS 10.12+
- Linux（所有主流发行版）
- Android 浏览器
- iOS Safari

## 可能的改进方向

- [ ] 添加多城市对比功能
- [ ] 添加 7 天天气预报
- [ ] 添加地理位置自动定位
- [ ] 添加温度单位切换（摄氏度/华氏度）
- [ ] 添加收藏城市功能（使用 LocalStorage）
- [ ] 添加更多天气信息（日出日落时间等）
- [ ] 添加图表显示气温变化
- [ ] 集成地图显示

## 注意事项

1. **API 限制**：OpenWeatherMap 免费版本有请求次数限制（60次/分钟）
2. **网络要求**：需要稳定的网络连接才能获取天气数据
3. **数据准确性**：天气数据由 OpenWeatherMap 提供，准确性取决于其数据源
4. **跨域问题**：直接打开 HTML 文件可能无法调用 API，建议使用本地服务器

## 许可证

MIT License

## 联系方式

如有问题或建议，欢迎提交 Issue 或 Pull Request！

---

**享受查询天气的乐趣！** 🌤️
