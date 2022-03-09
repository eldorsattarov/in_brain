import React from 'react';
import InbrainLayout from "../InbrainLayout";
import HeaderKurs from "../HeaderKurs";
import Footer from "../Footer";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";

const steps = ['', '', '', '', '', '', '', '', '', '', ''];


const CourseHtml1 = (props) => {


    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <InbrainLayout history={props.history}>

            <div className="courseHtmlOne">
                <HeaderKurs/>

                <div className="container">
                    <div className="row">

                        <div className="col-12 d-flex align-items-start">
                            <div className="stipper">
                                <Box sx={{width: '100%'}}>
                                    <Stepper activeStep={activeStep}>
                                        {steps.map((label, index) => {
                                            const stepProps = {};
                                            const labelProps = {};
                                            if (isStepOptional(index)) {
                                                labelProps.optional = (
                                                    <Typography variant="caption"></Typography>
                                                );
                                            }
                                            if (isStepSkipped(index)) {
                                                stepProps.completed = false;
                                            }
                                            return (
                                                <Step key={label} {...stepProps}>

                                                    <div className="text-center">
                                                        {/*<span>{index+1}</span>*/}
                                                        {/*<StepLabel className=""></StepLabel>*/}
                                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                                    </div>
                                                </Step>
                                            );
                                        })}
                                    </Stepper>
                                    {activeStep === steps.length ? (
                                        <React.Fragment>
                                            {/*<Typography sx={{ mt: 2, mb: 1 }}>*/}
                                            {/*    All steps completed - you&apos;re finished*/}
                                            {/*</Typography>*/}
                                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                                <Box sx={{flex: '1 1 auto'}}/>
                                                <Button onClick={handleReset}>Сброс настроек</Button>
                                            </Box>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            {/*<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>*/}
                                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                                <Button
                                                    color="inherit"
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    sx={{mr: 1}}
                                                >
                                                    Назад
                                                </Button>
                                                <Box sx={{flex: '1 1 auto'}}/>
                                                {/*{isStepOptional(activeStep) && (*/}
                                                {/*    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>*/}
                                                {/*        Skip*/}
                                                {/*    </Button>*/}
                                                {/*)}*/}

                                                <Button onClick={handleNext}>
                                                    {activeStep === steps.length - 1 ? 'Заканчивать' : 'Следующий'}
                                                </Button>
                                            </Box>
                                        </React.Fragment>
                                    )}
                                </Box>
                            </div>

                            <div className="progres" style={{marginTop: "-5px"}}>
                                <h4 className="m-0 p-0">Урок:</h4>
                                <span className="span1">{activeStep==11 ? 11 : activeStep + 1}</span><span className="span2"> / 11</span>
                            </div>

                        </div>

                        <div className="col-12 mt-5 mb-4 d-flex align-items-center justify-content-between">
                            <h2>Текущий урок:<span> Базовые элементы. HTML</span></h2>
                            {/*<a href="./htmlFiles/0.Kirish.pdf" target="_blank" className="downloadFile">Скачать*/}
                            {/*    документацию по уроку <img src="./imagess/html3.png"/></a>*/}
                        </div>

                        <div className="col-12 mt-4 mb-4">
                            <div className="videoRegistrOne">
                                <ReactPlayer
                                    onDisablePIP={false}
                                    width="100%"
                                    height="540px"
                                    controls
                                    url="https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <p>
                                Страницы сайтов собирают из элементов, как конструктор LEGO. Текстовые блоки, картинки,
                                ссылки, кнопки — всё это элементы сайта. Элементы описывают на языке HTML. Любая
                                веб-страница содержит код на этом языке и сохраняется в HTML-файле. Когда вы открываете
                                сайт, именно файл с HTML-кодом первым делом загружается в браузер.
                            </p>
                            <div className="w-100 d-flex justify-content-center">
                                <img src="./imagess/html2.png"/>
                            </div>
                            <p>
                                HTML-файл — это просто текстовый файл с расширением .html. Но пишут в HTML-файле не
                                список продуктов или заметки о жизни, а HTML-код.
                                Чтобы разобраться, как устроен HTML, рассмотрим пример. Вот кнопка с надписью. Нажмите
                                на неё, чтобы идти дальше:
                            </p>
                            <div className="knopka">
                                <div className="">
                                    <Link to=""></Link>
                                </div>
                            </div>

                        </div>

                        <div className="col-6 offset-3">
                            <div className="card d-flex justify-content-center align-items-center cardknopka">
                                <a className="cardknopkaLink" target="_blank"
                                   href="https://www.notion.so/Kirish-62859c42472a456d85187aad8379c6ac">
                                    Кнопка с надписью</a>
                            </div>
                        </div>

                        <div className="col-12">
                            <p>
                                А вот код, который описывает эту кнопку. Если написать его в HTML-файле, такая кнопка
                                появится на сайте:
                            </p>

                            <p>
                                Наверняка вы обратили внимание на конструкции с угловыми скобками — это HTML-теги. Теги
                                описывают элементы сайта. Например, тег {"<button>"} описывает кнопку.
                            </p>
                            <div className="w-100 d-flex justify-content-center">
                                <img src="./imagess/html1.png"/>
                            </div>
                            <p>
                                Чаще всего теги парные. Открывающий тег <span>{"<button>"}</span> говорит: «Здесь кнопка
                                начинается», а
                                закрывающий
                                <span>{"</button>"}</span>: «кнопка закончилась». Текст между <span>{"<button>"}</span>
                                и <span>{"</button>"}</span> отобразится на кнопке.
                                <p></p>
                                Этот текст может быть любым. Можно написать там «Отправить» или «Зарегистрироваться» и
                                разместить кнопку, где предполагаются такие действия. Можно написать на кнопке «Перейти
                                к заданию» и разместить её прямо здесь:
                            </p>

                        </div>

                        <div className="col-12 d-flex align-items-center justify-content-between mt-5 mb-4">
                            <Link to="/course_you" className="buttonLink">
                                <img src="./imagess/lestbutton.png"/>Вернуться к списку уроков
                            </Link>
                            <Link to="/html1_check" className="buttonLink">
                                Перейти к заданию <img src="./imagess/rightButton.png"/>
                            </Link>
                        </div>


                    </div>
                </div>

                <Footer/>
            </div>

        </InbrainLayout>
    );
};

export default CourseHtml1;
