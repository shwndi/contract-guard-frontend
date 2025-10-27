import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore: CSS module types missing in this project setup
import styles from './EntryPage.module.css';

const EntryPage: React.FC = () => {
    // 这里写逻辑
    const navigate = useNavigate();  // 获取路由跳转函数
    const canvasRef = useRef<HTMLCanvasElement>(null);  // Canvas 引用
    const [_mousePos, setMousePos] = useState({ x: 0, y: 0 });  // 鼠标位置

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;  // 如果canvas不存在，直接返回

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 设置Canvas大小
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const w = canvas.width;
        const h = canvas.height;


        // 这里后面会写粒子动画逻辑
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > w) {
                    this.vx *= -1;
                }
                if (this.y < 0 || this.y > h) {
                    this.vy *= -1;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = '#00ff88';
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#00ff88';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }

        }
        const particles: Particle[] = [];
        for (let i = 0; i < 80; i++) {
            particles.push(new Particle());
        }

        // === 添加动画函数 ===
        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
            ctx.fillRect(0, 0, w, h);

            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });
            requestAnimationFrame(animate);
        };

        // 开始动画
        animate();


        // === 数字流动画 ===
        const dataFlowElements = document.querySelectorAll('.data-flow-line');

        const updateDataFlow = () => {
            dataFlowElements.forEach((element) => {
                // 淡出
                // (element as HTMLElement).style.opacity = '0.3';

                setTimeout(() => {
                    // 生成新的随机二进制
                    const binary = Array.from({ length: 17 }, () =>
                        Math.random() > 0.5 ? '1' : '0'
                    ).join('');

                    // 格式化：8位 空格 8位
                    const formatted = binary.slice(0, 8) + ' ' + binary.slice(8);
                    element.textContent = formatted;

                    // 淡入
                    // (element as HTMLElement).style.opacity = '0.8';
                }, 100);
            });
        };

        // 每300ms更新一次
        const dataFlowInterval = setInterval(updateDataFlow, 100);

        // 清理函数
        return () => {
            clearInterval(dataFlowInterval);
        };

        console.log('Canvas准备好了！');


    }, []);


    return (
        <div
            className="relative min-h-screen bg-black text-green-400 overflow-hidden cursor-crosshair"
            onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
        >
            {/* Canvas背景 */}
            <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-10" />

            {/* 扫描线 */}
            <div
                className={`fixed w-full h-0.5 z-30 pointer-events-none ${styles.animateScan}`}
                style={{
                    background: 'linear-gradient(90deg, transparent, #00ff88, transparent)',
                    boxShadow: '0 0 10px #00ff88'
                }}
            />

            {/* 四角装饰 */}
            <div className="fixed top-5 left-5 w-12 h-12 border-t-2 border-l-2 border-green-400 z-20" />
            <div className="fixed top-5 right-5 w-12 h-12 border-t-2 border-r-2 border-green-400 z-20" />
            <div className="fixed bottom-5 left-5 w-12 h-12 border-b-2 border-l-2 border-green-400 z-20" />
            <div className="fixed bottom-5 right-5 w-12 h-12 border-b-2 border-r-2 border-green-400 z-20" />

            {/* 数据流 */}
            <div className="fixed right-5 top-1/2 -translate-y-1/2 text-xs z-20 space-y-1 font-mono">
                <div className="data-flow-line">01101001 11100010</div>
                <div className="data-flow-line">11001010 00110101</div>
                <div className="data-flow-line">10100110 11010011</div>
                <div className="data-flow-line">01010101 10101010</div>
            </div>

            {/* 主内容 */}
            <div className="relative z-20 min-h-screen flex flex-col items-center justify-center p-5">
                {/* Logo */}
                <h1
                    className={`text-5xl md:text-7xl font-bold text-center mb-4 ${styles.animateGlitch} font-mono`}
                    style={{ textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88' }}
                >
                    [ AI Guide Pro ]
                </h1>

                {/* 副标题 */}
                <p className="text-xl md:text-2xl text-center mb-12 opacity-80 font-mono">
                    智导 Pro
                </p>

                {/* === 功能卡片（添加这部分）=== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl w-full mb-12">
                    {/* 卡片1：漏洞检测 */}
                    <div className={`${styles.cardTech} group`}>
                        <div className={styles.cardShine} />
                        <h3 className="text-xl font-bold mb-3 relative z-10 font-mono">// 漏洞检测</h3>
                        <p className="text-sm relative z-10 leading-relaxed">
                            AI驱动的代码漏洞扫描，深度分析智能合约安全隐患
                        </p>
                        <div className={styles.statsBar}>
                            <div className={styles.statsFill} style={{ width: '87%' }} />
                        </div>
                    </div>

                    {/* 卡片2：业务分析 */}
                    <div className={`${styles.cardTech} group`}>
                        <div className={styles.cardShine} />
                        <h3 className="text-xl font-bold mb-3 relative z-10 font-mono">// 业务分析</h3>
                        <p className="text-sm relative z-10 leading-relaxed">
                            业务逻辑审查，确保代码实现符合业务预期
                        </p>
                        <div className={styles.statsBar}>
                            <div className={styles.statsFill} style={{ width: '94%', animationDelay: '0.2s' }} />
                        </div>
                    </div>

                    {/* 卡片3：GAS优化 */}
                    <div className={`${styles.cardTech} group`}>
                        <div className={styles.cardShine} />
                        <h3 className="text-xl font-bold mb-3 relative z-10 font-mono">// GAS优化</h3>
                        <p className="text-sm relative z-10 leading-relaxed">
                            精准分析Gas消耗，提供专业的优化建议方案
                        </p>
                        <div className={styles.statsBar}>
                            <div className={styles.statsFill} style={{ width: '76%', animationDelay: '0.4s' }} />
                        </div>
                    </div>

                    {/* 卡片4：AI洞察 */}
                    <div className={`${styles.cardTech} group`}>
                        <div className={styles.cardShine} />
                        <h3 className="text-xl font-bold mb-3 relative z-10 font-mono">// AI洞察</h3>
                        <p className="text-sm relative z-10 leading-relaxed">
                            深度学习算法分析，提供智能化的安全建议
                        </p>
                        <div className={styles.statsBar}>
                            <div className={styles.statsFill} style={{ width: '82%', animationDelay: '0.6s' }} />
                        </div>
                    </div>
                </div>

                {/* 启动按钮 */}
                <button onClick={() => navigate('/analyze')}
                    className="w-20 h-20 rounded-full bg-transparent border-3 border-green-400 text-green-400 text-xl cursor-pointer transition-all hover:bg-green-400 hover:text-black hover:scale-110 font-mono font-bold relative"
                >
                    <span className="relative z-10">启动</span>
                    <div
                        className={`absolute inset-0 rounded-full ${styles.animatePulseRing}`}
                        style={{ border: '3px solid #00ff88' }}
                    />
                </button>
                {/* === 在这里添加终端 === */}
                {/* 终端信息 */}
                <div className={`${styles.terminal} mt-8 max-w-2xl w-full font-mono`}>
                    <div className={`${styles.terminalLine}`}>&gt; System initialization...</div>
                    <div className={`${styles.terminalLine}`} style={{ animationDelay: '0.5s' }}>&gt; Loading AI modules...</div>
                    <div className={`${styles.terminalLine}`} style={{ animationDelay: '1s' }}>&gt; Security engine ready</div>
                    <div className={`${styles.terminalLine}`} style={{ animationDelay: '1.5s' }}>
                        &gt; STATUS: ONLINE<span className={`${styles.cursor} ml-1`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryPage;