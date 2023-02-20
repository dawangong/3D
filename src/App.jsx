import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { useMount } from "react-use";
import * as THREE from "three";

function App() {
  const [count, setCount] = useState(0);

  useMount(() => {
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000, //0xff0000设置材质颜色为红色
    });
    // 两个参数分别为几何体geometry、材质material
    const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    //设置网格模型在三维空间中的位置坐标，默认是坐标原点
    mesh.position.set(0, 10, 0);
    scene.add(mesh);

    // 定义相机输出画布的尺寸(单位:像素px)
    // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
    const width = 800; //宽度
    const height = 500; //高度
    // 实例化一个透视投影相机对象
    // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    //相机在Three.js三维坐标系中的位置
    // 根据需要设置相机位置具体值
    camera.position.set(200, 200, 200);
    camera.lookAt(mesh.position); //指向mesh对应的位置

    // 创建渲染器对象
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
    document.body.appendChild(renderer.domElement);
});

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
