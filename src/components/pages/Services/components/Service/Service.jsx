import { useCallback, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useInView } from 'react-intersection-observer';
import css from './Service.module.scss';
import sprite from '../../images/sprite.svg';
import Matter from 'matter-js';

const Service = () => {
  const [section, setSection] = useState(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const renderCanvas = useCallback(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.Composite;
    const Bodies = Matter.Bodies;
    const Runner = Matter.Runner;
    const params = {
      isStatic: true,
      thickness: 50,
      render: {
        fillStyle: 'transparent',
      },
    };
    const canvasSize = {
      width: document.body.clientWidth,
      height: document.querySelector('.service').clientHeight,
    };
    const engine = Engine.create({});

    const render = Render.create({
      element: section,
      engine: engine,
      options: {
        ...canvasSize,
        background: 'transparent',
        wireframes: false,
      },
    });
    const floor = Bodies.rectangle(
      canvasSize.width / 2,
      canvasSize.height,
      canvasSize.width,
      50,
      params
    );
    const wall1 = Bodies.rectangle(
      0,
      canvasSize.height / 2,
      50,
      canvasSize.height,
      params
    );
    const wall2 = Bodies.rectangle(
      canvasSize.width,
      canvasSize.height / 2,
      50,
      canvasSize.height,
      params
    );
    const top = Bodies.rectangle(
      canvasSize.width / 2,
      0,
      canvasSize.width,
      0,
      params
    );
    const wordElements = document.querySelectorAll('.word');
    const wordBodies = [...wordElements].map(elemRef => {
      const width = elemRef.offsetWidth;
      const height = elemRef.offsetHeight;

      return {
        body: Matter.Bodies.rectangle(
          document.body.clientWidth > 1123 ? 130 : 80,
          0,
          width,
          height,
          {
            render: {
              fillStyle: 'transparent',
            },
          }
        ),
        elem: elemRef,
        render() {
          const { x, y } = this.body.position;

          this.elem.style.top = `${
            document.body.clientWidth > 1565 ? y - 80 : y - 12
          }px`;
          this.elem.style.left = `${x - width / 2}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
      };
    });

    const mouse = Matter.Mouse.create(document.querySelector('.text'));
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    World.add(engine.world, [
      floor,
      ...wordBodies.map(box => box.body),
      wall1,
      wall2,
      top,
      mouseConstraint,
    ]);
    render.mouse = mouse;
    Runner.run(engine);
    Render.run(render);

    (function rerender() {
      wordBodies.forEach(element => {
        element.render();
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(rerender);
    })();
  }, [section]);

  useEffect(() => {
    if (inView) {
      renderCanvas();
      return;
    } else {
      return;
    }
  }, [inView, renderCanvas]);

  useEffect(() => {
    setSection(document.querySelector('.service'));
  }, []);

  const itemsArray = [
    'Knowledge Graph',
    'Predictive Modeling',
    'Neural Network',
    'NLP',
    'Cognitive Computing',
    'Deep Learning',
    'Big Data Analysis',
  ];

  return (
    <section ref={ref} className="service">
      <div className="container">
        <h2 className={css.service__title}>
          Services
          <span>
            <svg width="32" height="22">
              <use href={sprite + '#icon-arrow-bottom-right'}></use>
            </svg>
          </span>
        </h2>

        <div className={css.service__block}>
          <div className="text">
            {itemsArray.map(elem => {
              return (
                <span className="word" key={nanoid()}>
                  {elem}
                </span>
              );
            })}
          </div>

          <ul className={css.features}>
            <li className={css.features__item}>
              <span>*</span>Machine Learning
            </li>
            <li className={css.features__item}>
              <span>*</span>Natural Language Processing
            </li>
            <li className={css.features__item}>
              <span>*</span>Computer Vision
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
