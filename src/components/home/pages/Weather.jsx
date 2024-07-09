import React, { useState, useEffect } from "react";
import jQuery from "jquery";
import Button from "./../components/button";
import Footer from "../components/footer";
// import rainIcon from "./../assets/rain (1).png";
// import windIcon from "./../assets/windy.png";
// import humidity from "./../assets/humidity.png";
// import FutureWeatherComponent from "../components/futureWeatherComponent";
import navigate from "../inc/scripts/utilities";
// import ForecastWeatherItems from "../components/forecastWeatherItems";
import Spinner from "../components/spinner";
// import Ripple1 from "./../assets/ripple1.gif";
// import Location from "./../assets/map.png";
import * as formHandler from "../apis/get_Weather";
import { db } from "../backend/app_backend";
// import getGeolocation from "../apis/getGeolocation";
import { getCurrentDate } from "../inc/scripts/utilities";
// import Thunder from "./../assets/static/thunder.svg";
import Day from "../../../assets/static/day.svg";
// import Drizzle from "./../assets/static/rainy-5.svg";
// import Rainy from "./../assets/static/rainy-7.svg";
// import Snowy from "./../assets/static/snowy-6.svg";
// import FreezingRain from "./../assets/static/freezing-rain.svg";
// import Misty from "./../assets/static/mist.svg";
// import BrokenClouds from "./../assets/static/broken-clouds.svg";
// import OvercastClouds from "./../assets/static/overcast-clouds.svg";
// import ScatteredClouds from "./../assets/static/scattered-clouds.svg";
// import FewClouds from "./../assets/static/few-clouds.svg";
// import Haze from "./../assets/static/haze.svg";
import HumidityIcon from "../../../assets/humidity-icon.svg";
import WindIcon from "../../../assets/wind-icon.svg";
import PressureIcon from "../../../assets/pressure-icon.svg";
import backgroung_hills from '../../../assets/static/mountains_bg.jpg'
import PropTypes from 'prop-types';

const WeatherApp = () => {
	//check if the user navigated from the home page
	if (!db.get("HOME_PAGE_SEEN")) {
		navigate("/");
	}
	//holds the current component to insert into the utility footer component
	const [componentToInsert, setComponentToInsert] = useState("");
	const [weatherInput, setWeatherInput] = useState();
	let savedLocation;

	savedLocation = db.get("USER_DEFAULT_LOCATION");

	const addUtilityComponentHeight = () => {
		jQuery(($) => {
			$.noConflict();
			$(".cmp").removeClass("d-none");
			$(".utility-component").toggleClass("add-utility-component-height");
		});
	};

	const showMoreWeather = () => {
		navigate("weathermain");
	};

	const SearchComponent = () => {
		const [searchValue, setSearchValue] = useState("");
		return (
			// <section className="cmp d-flex align-items-center justify-content-center flex-column my-5">
			// 	<form
			// 		id="searchWeatherForm"
			// 		onSubmit={(e) => {
			// 			formHandler.handleWeatherForm(e);
			// 			setWeatherInput();
			// 		}} onChange={(e)=>{
			// 			setSearchValue(e.target.value)
			// 		}}>
			// 		<label htmlFor="searchWeather" className="py-2 text-capitalize ">
			// 			search city
			// 		</label>
			// 		<input
			// 			type="text"
			// 			name="searchWeather"
			// 			id="searchWeather"
			// 			placeholder="Enter the name of city"
			// 			value={weatherInput}
			// 			className="form-control search-input p-3 brand-small-text w-100"
			// 			onChange={(e) => {
			// 				setWeatherInput(e.target.value);
			// 			}}
			// 			autoComplete="off"
			// 			autoFocus={true}
			// 		/>
			// 		<p
			// 			className="error-holder text-danger py-3 fs-6 brand-small-text text-center d-none"
			// 			id="searchErrorLog">
			// 			city not found
			// 		</p>

			// 		<section className="d-none "></section>
			// 		<SearchMenuComponent search={searchValue}/>
			// 		<Button
			// 			text="track saved location!"
			// 			className="shadow brand-btn-3-secondary toggle-width-3 my-5 text-dark text-capitalize p-2"
			// 			id="searchSavedLocationWeather"
			// 			onClick={(e) => {
			// 				formHandler.handleWeatherForm(e, savedLocation);
			// 				setWeatherInput();
			// 			}}
			// 		/>
			// 	</form>
			// </section>
			<section className="cmp" style={{
				display: 'block',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				margin: 'auto',
				marginLeft:'40% !important'
			}}>
				<form
				
					id="searchWeatherForm"
					onSubmit={(e) => {
						formHandler.handleWeatherForm(e);
						setWeatherInput('');
					}}
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
					style={{
						textAlign:'center !important',
						width: '100%',
						color:'#000 !important',
						maxWidth: '320',
						margin:'auto !important',
						padding: '3rem',
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
						borderRadius: '20px',
						backgroundColor: '#121212 !important'
					}}
				>
					<label htmlFor="searchWeather" style={{
						padding: '0.5rem 0',
						color:'#111 !important',
						textTransform: 'capitalize'
						
					}}>
						Search city
					</label>
					<br />
					<input
						type="text"
						name="searchWeather"
						id="searchWeather"
						placeholder="Enter the name of city"
						value={weatherInput}
						onChange={(e) => {
							setWeatherInput(e.target.value);
						}}
						autoComplete="off"
						autoFocus={true}
						style={{
							width: '90% !important',
							padding: '0.75rem',
							fontSize: '1rem',
							border: '1px solid #ced4da',
							borderRadius: '4px',
							boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
							transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
						}}
					/>
					<p
						className="error-holder text-danger py-3 fs-6 brand-small-text text-center"
						id="searchErrorLog"
						style={{
							display: 'none',
							colot:'#121212'
						}}
					>
						City not found
					</p>

					{/* <section className="d-none"></section> */}
					{/* <SearchMenuComponent search={searchValue} /> */}

						<br />

						<br /><br />
					<Button
						text="Track saved location!"
						className="shadow brand-btn-3-secondary toggle-width-3 my-5 text-dark text-capitalize p-2"
						id="searchSavedLocationWeather"
						onClick={(e) => {
							formHandler.handleWeatherForm(e, savedLocation);
							setWeatherInput('');
						}}
						style={{
							width: '100%',
							padding: '0.75rem 1rem',
							fontSize: '1rem',
							borderRadius: '4px',
							boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
							backgroundColor: '#f8f9fa',
							color: '#343a40',
							border: '1px solid #e9ecef',
							transition: 'background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out'
						}}
					/>
				</form>
			</section>
		);
	};

	const SearchMenuComponent = ({ search }) => {
		const [dataArray, changeDataArray] = useState([]);
		useEffect(() => {
			if (search.length > 3) {
				formHandler.findCity(search, changeDataArray)
			}
		}, [search])

		function clickHandler(e) {
			jQuery("#searchWeather").val(e.target.textContent)
			formHandler.handleWeatherForm(e, savedLocation);
			setWeatherInput()
		}

		return (
			// <section className="cmp d-flex align-items-center justify-content-start bg-white px-2 mt-2 rounded">
			// 	<ul className="m-0 p-0">
			// 		{dataArray.map((data,ind)=> <li key={ind} onClick={clickHandler} style={{cursor:"pointer"}}><p className="text-dark text-left m-0" style={{fontSize:"14px"}}>{data.name}</p></li>)}
			// 	</ul>
			// </section>		
			<section className="cmp" style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'start',
				backgroundColor: '#ffffff',
				padding: '0.5rem',
				marginTop: '0.5rem',
				borderRadius: '8px',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
			}}>
				<ul className="m-0 p-0" style={{
					listStyleType: 'none'
				}}>
					{dataArray.map((data, index) => (
						<li key={index} onClick={() => clickHandler(data)} style={{
							cursor: 'pointer'
						}}>
							<p className="text-dark text-left m-0" style={{
								fontSize: '14px'
							}}>
								{data.name}
							</p>
						</li>
					))}
				</ul>
			</section>
		)
	}

	//load the search component into the utility component
	const testSearch = () => {
		addUtilityComponentHeight();
		setComponentToInsert(<SearchComponent />);

	};

	return (
		<React.Fragment>
			{/* <Spinner /> */}
			{/* <div
				className="container-fluid d-flex flex-column py-2 px-0 width-toggle-5 m-auto"
				style={{ overflowX: "hidden", background:{backgroung_hills} }}
				id="weatherContainer"> */}
			<div className="container-fluid d-flex flex-column py-2 px-0 width-toggle-5 m-auto" style={{
				display: 'flex',
				flexDirection: 'column',
				paddingTop: '2rem',
				paddingBottom: '2rem',
				paddingLeft: '0',
				paddingRight: '0',
				maxWidth: '100%',
				overflowX: 'hidden',
				background: backgroung_hills // Assuming backgroung_hills is a variable containing the background color value
			}} id="weatherContainer">
{/* 							
				<section className="app-header d-flex justify-content-center px-2 flex-row-reverse padding-top-100px padding-left-100px padding-right-100px">
					<section className="city-location">
						<h5 className="fw-bold fs-20 font-80px" id="weatherLocation">
							{db.get("WEATHER_LOCATION") || "Location"}
						</h5>
						<p className="date-time text-muted brand-small-text text-capitalize font-20px text-center">
							{getCurrentDate()}
						</p>
					</section>

			
				</section>





				<section className="current-weather-container d-flex justify-content-between px-2 my-3  padding-left-200px padding-right-200px">
					<section className="current-weather-value-container">
						<section className="d-flex ">
							<h1
								className="current-weather-value fw-bold brand-large-text"
								id="currentDeg">
								{Math.ceil(db.get("WEATHER_DEG")) || 30}
							</h1>

							<sup className="fw-bold brand-medium-text current-weather-unit">
								o
							</sup>
						</section>
						<p className="text-muted text-capitalize" id="weatherDes">
							{db.get("WEATHER_DESCRIPTION") || "clear sky"}
						</p>
					</section>
					<section
						className="current-weather-icon my-4 mx-3 px-3"
						id="main-weather-icon-container">
						<img
							src={formHandler.checkWeatherCode(db.get("WEATHER_CODE")) || Day}
							width={64}
							height={64}
							alt="main weather icon"
							id="main-weather-icon"
						/>
					</section>
				</section> */}



<section
                className="app-header"
                style={{
                    display: 'block',
                    justifyContent: 'center',
                    padding: ' 0',
					margin:'0',
					textAlign:'center',
                    flexDirection: 'row-reverse',
                    alignItems: 'center'
                }}
            >
                {/* City Location Section */}
                <section className="city-location">
                    <h5
                        className="fw-bold fs-20 font-80px"
                        id="weatherLocation"
                        style={{
                            fontWeight: 'bold',
                            fontSize: '20px',
							marginTop:'0',
                            fontFamily: 'Arial, sans-serif',
                            marginBottom: '0'
                        }}
                    >
                        {db.get("WEATHER_LOCATION") || "Location"}
                    </h5>
                    <p
                        className="date-time text-muted brand-small-text text-capitalize font-20px text-center"
                        style={{
                            color: '#222',
                            fontSize: '20px',
                            textTransform: 'capitalize',
                            textAlign: 'center'
                        }}
                    >
                        {getCurrentDate()}
                    </p>
                </section>
            </section>

            {/* Current Weather Container */}
            <section
                className="current-weather-container"
                style={{
                    display: 'inline',
                    justifyContent: 'space-between',
                    padding: '0 200px',
                    marginTop: '30px',
					maxWidth:'100%'
                }}
            >
                {/* Weather Value Section */}
                <section  style={{
                    display: 'inline',
                    justifyContent: 'space-between',
                    padding: '0 0',
                    marginTop: '30px',
					maxWidth:'30%'
                }}
             className="current-weather-value-container">
                    <section 
					style={{
						fontWeight: 'bold',
						height:'70px'}}className="d-flex align-items-center">
                        <h1
                            className="current-weather-value fw-bold brand-large-text"
                            id="currentDeg"
                            style={{
                                fontWeight: 'bold',
                                fontSize: '36px',
                                color: '#111',
                                marginRight: '1000px !important',
								maxWidth:'30%'
                            }}
                        >
							{Math.ceil(db.get("WEATHER_DEG")) || 30}
                        </h1>
                        <sup
                            className="fw-bold brand-medium-text current-weather-unit"
                            style={{
                                fontWeight: 'bold',
                                fontSize: '18px',
                                color: '#111',
								paddingLeft:'100px !important'
                            }}
                        >
                            o
                        </sup>
                    </section>
                    <p
                        className="text-muted text-capitalize"
                        id="weatherDes"
                        style={{
                            color: '#111',
                            textTransform: 'capitalize',
                            marginTop: '5px'
                        }}
                    >
                        {db.get("WEATHER_DESCRIPTION") || "clear sky"}
                    </p>
                </section>

                {/* Weather Icon Section */}
                <section
                    className="current-weather-icon my-4 mx-3 px-3"
                    id="main-weather-icon-container"
                    style={{
                        marginTop: '-90px',
                        padding: '0 20px',
						alignContent:'end !important',
						alignSelf:'end !important',
						alignItems:'end !important',
						maxWidth:'30%',
						marginLeft:'90%'
                    }}
                >
                    <img
                        src={formHandler.checkWeatherCode(db.get("WEATHER_CODE")) || Day}
                        width={64}
                        height={64}
                        alt="main weather icon"
                        id="main-weather-icon"
                        style={{
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                </section>
            </section>
				








				{/* <section
					
					role="button"
					className="mx-2 rounded-3 shadow my-5 py-2 current-weather-assets brand-tertiary-color d-flex align-items-center justify-content-around text-center  margin-top-200px"
					onClick={showMoreWeather}>
					<section className="current-weather-wind-speed d-flex flex-column align-items-center justify-content-center">
						<section className="wind-icon py-1">
							<img src={WindIcon} height={"30"} width={"30"} alt="wind-icon" />
						</section>
						<p
							className="wind-value fw-bold text-light  brand-small-text text-center py-1 m-0"
							id="wind-value">
							{db.get("SUB_WEATHER_WIND_VALUE") || "2.90 m/s"}
						</p>
						<p className="m-0 wind-text text-muted text-capitalize brand-small-text-2 weather-text text-center">
							Wind
						</p>
					</section>

					<section className=" current-weather-humidity-degree d-flex flex-column align-items-center ">
						<section className="humidity-icon py-1">
							<img
								src={HumidityIcon}
								height={"30"}
								width={"30"}
								alt="humidity-icon"
							/>
						</section>
						<p
							className="humidity-value fw-bold text-light  brand-small-text  text-center py-1 m-0"
							id="humidity-value">
							{db.get("SUB_WEATHER_HUMIDITY_VALUE") || "98%"}
						</p>
						<p className="m-0 humidity-text text-muted text-capitalize text-center brand-small-text-2 weather-text">
							humidity
						</p>
					</section>

					<section className="current-weather-rain-degree d-flex flex-column align-items-center">
						<section className="rain-icon py-1">
							<img
								src={PressureIcon}
								height={"30"}
								width={"30"}
								alt="rain-icon"
							/>
						</section>
						<p
							className="rain-value fw-bold text-light brand-small-text  text-center py-1 m-0"
							id="pressure-value">
							{db.get("SUB_WEATHER_PRESSURE_VALUE") || "1000 hPa"}
						</p>
						<p className="m-0 rain-text text-muted text-capitalize text-center brand-small-text-2 weather-text">
							Pressure
						</p>
					</section>
				</section> */}
					<section  style={{
                borderRadius: '12px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '16px',
				display:'flex',
				textAlign:'center',
				margin:'20px 40px 0px 160px',
                backgroundColor: '#006370',
                marginTop: '200px !important'
            }}>
				<section style={{
            display: 'block',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
						width:'25%',

            margin: '0 auto', // Center horizontally
            padding: '10px', // Adjust padding as needed
            backgroundColor: '#006370',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }} className="current-weather-wind-speed">
					<section className="wind-icon">
						<img src={WindIcon} height={30} width={30} alt="wind-icon" style={{ marginBottom: '5px' }} />
					</section>
					<p className="wind-value" style={{
						fontWeight: 'bold',
						color: '#666',
						fontSize: '14px',
						margin: '5px 0'
					}} id="wind-value">
						{db.get("SUB_WEATHER_WIND_VALUE") || "2.90 m/s"}
					</p>
					<p className="wind-text" style={{
						margin: '0',
						color: '#999',
						fontSize: '12px',
						textTransform: 'capitalize'
					}}>
						Wind
					</p>
				</section>

				{/* Humidity Section */}
				<section style={{
            display: 'block',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '0 auto', // Center horizontally
            padding: '10px', // Adjust padding as needed
            backgroundColor: '#006370',
			width:'25%',

            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }} className="current-weather-humidity-degree">
					<section className="humidity-icon">
						<img src={HumidityIcon} height={30} width={30} alt="humidity-icon" style={{ marginBottom: '5px' }} />
					</section>
					<p className="humidity-value" style={{
						fontWeight: 'bold',
						color: '#666',
						fontSize: '14px',
						margin: '5px 0'
					}} id="humidity-value">
						{db.get("SUB_WEATHER_HUMIDITY_VALUE") || "98%"}
					</p>
					<p className="humidity-text" style={{
						margin: '0',
						color: '#999',
						fontSize: '12px',
						textTransform: 'capitalize'
					}}>
						Humidity
					</p>
				</section>

				{/* Pressure Section */}
				<section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
			maxWidth:'33%',
            textAlign: 'center',
			width:'25%',	
            margin: '0 auto', // Center horizontally
            padding: '10px', // Adjust padding as needed
            backgroundColor: '#006370',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}className="current-weather-rain-degree">
					<section className="rain-icon">
						<img src={PressureIcon} height={30} width={30} alt="pressure-icon" style={{ marginBottom: '5px' }} />
					</section>
					<p className="rain-value" style={{
						fontWeight: 'bold',
						color: '#666',
						fontSize: '14px',
						margin: '5px 0'
					}} id="pressure-value">
						{db.get("SUB_WEATHER_PRESSURE_VALUE") || "1000 hPa"}
					</p>
					<p className="rain-text" style={{
						margin: '0',
						color: '#999',
						fontSize: '12px',
						textTransform: 'capitalize'
					}}>
						Pressure
					</p>
				</section>
			</section>


			<br />
			<br />
			<br />
			{/* @utilityTags - dynamic components to be inserted into the footer component @onClick event - responsible for the search component trigger on the app || weather route*/}
			<Footer utilityTags={componentToInsert} onClick={testSearch} />
		</div>
		</React.Fragment >
	);
};

WeatherApp.propTypes = {
	search: PropTypes.any,
	// 'search.length': PropTypes.any

};

export default WeatherApp;
