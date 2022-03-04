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

const steps = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];


const CourseYou = (props) => {

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

            <div className="courseyou">
                <HeaderKurs/>

                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h2>Текущий курс: <span>HTML5  Как всё устроено</span></h2>
                        </div>

                        <div className="col-12">
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
                                            <Button onClick={handleReset}>Reset</Button>
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
                                                Back
                                            </Button>
                                            <Box sx={{flex: '1 1 auto'}}/>
                                            {/*{isStepOptional(activeStep) && (*/}
                                            {/*    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>*/}
                                            {/*        Skip*/}
                                            {/*    </Button>*/}
                                            {/*)}*/}

                                            <Button onClick={handleNext}>
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>
                                )}
                            </Box>
                        </div>
                        <div className="col-6 mt-5">
                            <h3>Как устроено обучение</h3>
                            <p>
                                Всё обучение в Практикуме разбито на спринты. Спринт — это двухнедельный отрезок,
                                который построен<br/>
                                определённым образом: сначала вы изучаете теорию, потом практикуетесь в тренажёре,
                                затем делаете и сдаёте проект.
                            </p>
                            <Link to="/student_card" className="courseStartoneLink">Продолжить обучение<img
                                src="./imagess/Vector.png"/></Link>
                        </div>
                        <div className="col-6 mt-5">
                            <img src="./imagess/courseyou.png" className="w-100 courseyouImg"/>
                        </div>

                        <div className="col-12 mt-5 mb-3">
                            <h3>Ваши курсы:</h3>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="card text-center">
                                <img src="./imagess/you1.png" className="card-img-top"/>
                                <div className="card-body mt-3">
                                    <h6 className="">
                                        Привет
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="card text-center">
                                <img src="./imagess/you2.png" className="card-img-top"/>
                                <div className="card-body mt-3">
                                    <h6 className="">
                                        Что такоe<br/> веб-разработка
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="card text-center">
                                <img src="./imagess/you3.png" className="card-img-top"/>
                                <div className="card-body mt-3">
                                    <h6 className="">
                                        Про<br/>
                                        Трудоустройство
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="card text-center">
                                <img src="./imagess/you4.png" className="card-img-top"/>
                                <div className="card-body mt-3">
                                    <h6 className="">
                                        Как устроено<br/>
                                        обучение
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="card text-center">
                                <img src="./imagess/you5.png" className="card-img-top"/>
                                <div className="card-body mt-3">
                                    <h6 className="">
                                        Команда<br/>
                                        сопровождения
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="card text-center">
                                <img src="./imagess/you6.png" className="card-img-top"/>
                                <div className="card-body mt-3">
                                    <h6 className="">
                                        Программа<br/>
                                        обучения
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="card text-center">
                                <img src="./imagess/you7.png" className="card-img-top"/>
                                <div className="card-body mt-3">
                                    <h6 className="">
                                        Какие проекты<br/>
                                        предстоит делать?
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="card text-center">
                                <img src="./imagess/you8.png" className="card-img-top"/>
                                <div className="card-body mt-3">
                                    <h6 className="">
                                        Про реальные<br/>
                                        проекты
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="card text-center">
                                <img src="./imagess/you9.png" className="card-img-top"/>
                                <div className="card-body mt-3">
                                    <h6 className="">
                                        Сколько времени<br/>
                                        придётся тратить<br/>
                                        на учёбу?
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3 mb-4">

                        </div>
                    </div>
                </div>

                <Footer/>
            </div>

        </InbrainLayout>
    );
};

export default CourseYou;
