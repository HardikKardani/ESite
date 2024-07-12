$(document).ready(function () {

    FillCardDataList();

    fetchWeather();
})
function getWindSpeedIcon(speed) {
    if (speed < 1.0) {
        return '<i class="fas fa-wind icon"></i>'; // Calm icon
    } else if (speed < 5.0) {
        return '<i class="fas fa-wind icon"></i>'; // Light breeze icon
    } else if (speed < 10.0) {
        return '<i class="fas fa-wind icon"></i>'; // Moderate breeze icon
    } else if (speed < 20.0) {
        return '<i class="fas fa-wind icon"></i>'; // Strong breeze icon
    } else {
        return '<i class="fas fa-wind icon"></i>'; // High wind icon
    }
}
function getPrecipitationIcon(weatherCode) {
    switch (weatherCode) {
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
            return {
                name: 'Mostly Rainy',
                icon: getIcon('fa-cloud-showers-heavy')
            }; // Rain showers
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return {
                name: 'Mostly Snowy',
                icon: getIcon('fa-snowflake')
            }; // Snowfall or snow showers
        default:
            return {
                name: '',
                icon: ''
            }; // Snowfall or snow showers
    }
}
function getIcon(iconName) {
    return `<i class="fas ${iconName} icon"></i>`;
}
// Function to get descriptive weather condition based on weather code, precipitation, and daytime status
function getWeatherCondition(weatherCode, precipitation) {
    // Function to get icon based on weather code and daytime status


    // Check for precipitation
    if (precipitation > 0) {
        switch (weatherCode) {
            case 51:
            case 53:
            case 55:
            case 56:
            case 57:
            case 61:
            case 63:
            case 65:
            case 66:
            case 67:
            case 80:
            case 81:
            case 82:
                return {
                    name: 'Mostly Rainy',
                    icon: getIcon('fa-cloud-showers-heavy')
                }; // Rain showers
            case 71:
            case 73:
            case 75:
            case 77:
            case 85:
            case 86:
                return {
                    name: 'Mostly Snowy',
                    icon: getIcon('fa-snowflake')
                }; // Snowfall or snow showers
            default:
                return {
                    name: 'Precipitation',
                    icon: getIcon('fa-cloud-rain')
                }; // Default precipitation
        }
    } else {
        // No precipitation, determine based on weather code
        switch (weatherCode) {
            case 0:
                return {
                    name: 'Clear Sky',
                    icon: getIcon('fa-sun')
                };
            case 1:
            case 2:
                return {
                    name: 'Partly Cloudy',
                    icon: getIcon('fa-cloud-sun')
                };
            case 3:
                return {
                    name: 'Overcast',
                    icon: getIcon('fa-cloud')
                };
            case 45:
            case 48:
                return {
                    name: 'Foggy',
                    icon: getIcon('fa-smog')
                };
            case 95:
            case 96:
            case 99:
                return {
                    name: 'Thunderstorms',
                    icon: getIcon('fa-bolt')
                };
            default:
                return {
                    name: 'Pleasant ',
                    icon: getIcon('fa-cloud')
                };
        }
    }
}

function fetchWeather() {
    const apiUrl = "https://api.open-meteo.com/v1/forecast";
    const params = {
        latitude: -6.200000,
        longitude: 106.816666,
        hourly: 'temperature_2m,precipitation,windspeed_10m,winddirection_10m',
        'timezone': 'Asia/Jakarta',
        current_weather: true
    };

    // Map weather codes to descriptions
    //const weatherCodeDescriptions = {
    //    0: 'Clear sky',
    //    1: 'Mainly clear',
    //    2: 'Partly cloudy',
    //    3: 'Overcast',
    //    45: 'Fog',
    //    48: 'Depositing rime fog',
    //    51: 'Drizzle: Light',
    //    53: 'Drizzle: Moderate',
    //    55: 'Drizzle: Dense intensity',
    //    56: 'Freezing Drizzle: Light',
    //    57: 'Freezing Drizzle: Dense intensity',
    //    61: 'Rain: Slight',
    //    63: 'Rain: Moderate',
    //    65: 'Rain: Heavy intensity',
    //    66: 'Freezing Rain: Light',
    //    67: 'Freezing Rain: Heavy intensity',
    //    71: 'Snow fall: Slight',
    //    73: 'Snow fall: Moderate',
    //    75: 'Snow fall: Heavy intensity',
    //    77: 'Snow grains',
    //    80: 'Rain showers: Slight',
    //    81: 'Rain showers: Moderate',
    //    82: 'Rain showers: Violent',
    //    85: 'Snow showers: Slight',
    //    86: 'Snow showers: Heavy',
    //    95: 'Thunderstorm: Slight or moderate',
    //    96: 'Thunderstorm with slight hail',
    //    99: 'Thunderstorm with heavy hail'
    //};

    $.ajax({
        url: apiUrl,
        data: params,
        success: function (data) {
            var currentWeather = data.current_weather;
            var temperature = currentWeather.temperature;
            var tempIcon = temperature < 0 ? '<i class="fas fa-snowflake icon"></i>' :
                temperature < 10 ? '<i class="fas fa-temperature-low icon"></i>' :
                    temperature < 25 ? '<i class="fas fa-temperature-high icon"></i>' :
                        '<i class="fas fa-temperature-full icon"></i>';

            var windSpeed = currentWeather.windspeed;
            var windDirection = currentWeather.winddirection;
            var windSpeedIcon = getWindSpeedIcon(windSpeed);
            var windSpeedUnit = data.current_weather_units.windspeed;
            var weatherCode = currentWeather.weathercode;
            //var weatherDescription = weatherCodeDescriptions[weatherCode] || 'Unknown weather condition';
            var isDaytime = currentWeather.is_day;
            var weatherCondition = getWeatherCondition(weatherCode, precipitation);
            // Handle precipitation and probability
            var precipitation = currentWeather.precipitation || 0;
            var precipitationProbability = currentWeather.precipitation_probability || 0;
            var dayNightIcon = isDaytime == 1 ? '<i class="fas fa-sun icon"></i>' : '<i class="fas fa-moon icon"></i>';
            var precipitations = getPrecipitationIcon(weatherCode);
            // Assigning icons based on weather code


            var html = '<div class="row">' +
                '<div class="col-3"><label style="font-weight: bold;">Temperature</label><span>: ' + dayNightIcon + ' ' + tempIcon + ' ' + temperature + data.current_weather_units.temperature + '</span></div>' +
                '<div class="col-3"><label style="font-weight: bold;">Wind Speed</label><span>: ' + windSpeedIcon + ' ' + windDirection + '° at ' + windSpeed + windSpeedUnit + '</span></div>' +
                '<div class="col-3"><label style="font-weight: bold;">Weather</label><span>: ' + weatherCondition.icon + ' ' + weatherCondition.name + '</span></div>' +
                '<div class="col-3"><label style="font-weight: bold;">Precipitation</label><span>: ' +
                (precipitation > 0 ? (precipitations.icon + ' ' + precipitations.name + ' (' + (precipitationProbability * 100) + '%)') : 'No precipitation') +
                '</span></div>';
            '</div>';



            $("#weather-data").html(html);
        },
        error: function (error) {
            console.log("Error fetching weather data:", error);
            $("#weather-data").html("<p>Failed to fetch weather data.</p>");
        }
    });
}
function FillCardDataList() {


    var id = getParameterByName('id');;
    $.ajax({
        type: "GET",
        url: "/Site/GetCardDataList/?id=" + id,
        success: function (data) {
            data = $.parseJSON(data.response);
            $("#siteID").html(data.Table2[0].SiteId);
            $("#siteName").html(data.Table2[0].SiteName);
            $("#siteType").html(data.Table2[0].siteType);
            $("#noOfDg").html(data.Table[0].NoOfGenerator);
            $("#region").html(data.Table2[0].RegionName);
            $("#typeOfCooling").html(data.Table2[0].CoolingType);
            $("#state").html(data.Table[0].state);
            $("#country").html(data.Table2[0].CountryName);
            $("#siteRunningOn").html(data.Table2[0].siteRunningOn);
            $("#searchOn").html(data.Table2[0].searchOn);
            $("#noOfTenant").html(data.Table2[0].NoOfTenant);
            $("#NoofChargers").html(data.Table2[0].NoOfGenerator);
            $("#IPCt").html(data.Table[0].IPCt);
            $("#IPVolt").html(data.Table[0].IPVolt);
            $("#OPCt").html(data.Table[0].OPCt);
            $("#OPVolt").html(data.Table[0].OPVolt);

            $("#NoofRectifier").html(data.Table[0].NoofRectifier);
            $("#RIPCt").html(data.Table[0].RIPCt);
            $("#RIPVolt").html(data.Table[0].RIPVolt);
            $("#ROPCt").html(data.Table[0].ROPCt);
            $("#ROPVolt").html(data.Table[0].ROPVolt);
            $("#GRVOLT").html(data.Table[0].GRVOLT);
            $("#GVVOLT").html(data.Table[0].GVVOLT);
            $("#GBVOLT").html(data.Table[0].GBVOLT);
            $("#GRCR").html(data.Table[0].GRCR);
            $("#GVCt").html(data.Table[0].GVCt);
            $("#GBCR").html(data.Table[0].GBCR);
            $("#gRVolt").html(data.Table[0].gRVolt);
            $("#gYVlot").html(data.Table[0].gYVlot);
            $("#gBVlot").html(data.Table[0].gBVlot);
            $("#BRCt").html(data.Table[0].BRCt);
            $("#BVCt").html(data.Table[0].BVCt);
            $("#BBCt").html(data.Table[0].BBCt);
            $("#gFreq").html(data.Table[0].gFreq);
            $("#gFuel").html(data.Table[0].gFuel);
            $("#gBat").html(data.Table[0].gBat);
            $("#BattreyType").html(data.Table[0].BattreyType);
            $("#NoOfBattery").html(data.Table[0].NoOfBattery);
            $("#Ct").html(data.Table[0].Ct);
            $("#Volt").html(data.Table[0].Volt);
            $("#AvgBatTemp").html(data.Table[0].AvgBatTemp);
            $("#AvgEngTemp").html(data.Table[0].AvgEngTemp);
            if (data.Table[0].Action1 == '1') {
                $('#Action1').prop('checked', true);
            }
            if (data.Table[0].Action2 == '1') {
                $('#Action2').prop('checked', true);
            }
            if (data.Table[0].Action3 == '1') {
                $('#Action3').prop('checked', true);
            }
            if (data.Table[0].Action4 == '1') {
                $('#Action4').prop('checked', true);
            }
            if (data.Table[0].Action5 == '1') {
                $('#Action5').prop('checked', true);
            }
            $("#systemPower").html(data.Table[0].systemPower);
            $("#batteryCurrent").html(data.Table[0].batteryCurrent);
            $("#acVoltage").html(data.Table[0].acVoltage);
            $("#rectifierCurrent").html(data.Table[0].rectifierCurrent);
            $("#temperature").html(data.Table[0].temperature);
            $("#loadCurrent").html(data.Table[0].loadCurrent);
            CreateNavTab(data);
        }
    });
}

function CreateNavTab(data) {
    var noOfTenant = data.Table2[0].NoOfTenant;
    var nooftenanttab = $('.nooftenanttab');
    var nooftenantcontent = $('.nooftenanttab-content');
    nooftenanttab.empty();
    $(".nooftenanttab").html('');
    /*nooftenantcontent.empty();*/

    var textBoxData = [];



    debugger
    var tabHtmlt = '';
    for (var i = 0; i < noOfTenant; i++) {
        tabHtmlt += `
                <li>
                    <a class="nav-link ${i === 0 ? 'active' : ''}" data-toggle="tab" data-target="#tenant${data.Table3[i].SlNo}">
                        ${data.Table3[i].TenantName}
                    </a>
                </li>`;
    }
    $(".nooftenanttab").html(tabHtmlt);
    debugger;
    var tabcontentHtml = '';
    for (var y = 0; y < noOfTenant; y++) {
        tabcontentHtml += `

        <div class="tab-pane ${y === 0 ? 'show active' : 'fade'}" id="tenant${data.Table3[y].SlNo}">
        <div class="grid-stack grid-stacks  gs-area">`;
        var tempTenantData = data.Table4.filter(record => record.TenantID === data.Table3[y].SlNo);
        debugger;
        for (var i = 0; i < tempTenantData.length; i++) {
            if (tempTenantData[i].IsGridAvailable == true) {
                tabcontentHtml += `
                    <div class="grid-stack-item ${tempTenantData[i].IsGridVisible == 1 ? '' : tempTenantData[i].IsGridVisible == 2 ? 'notvisible ' : 'disable '}" data-gs-auto-position="true"
                    data-gs-width="4" data-gs-height="12" data-gs-min-height="10"
                    data-gs-min-width="4">
                    <div class="console-panel grid-stack-item-content">
                        <div class="console-panel-header light" style="background-color: rgb(12, 52, 61);">
                            <div class="cph-left">
                                <h5>Grid <i class="icon dripicons-bell text-warning" style="font-size: 1em;"></i></h5>
                            </div>
                            <div class="cph-right">
                                <ul class="top-header-btns">
                                    <li>
                                        <a class="collapse-panel" href="#"
                                            title="Collapse/Uncollapse Panel"
                                            data-rel="tooltip">
                                            <i class="icon dripicons-chevron-up"></i>
                                        </a>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#" data-toggle="dropdown"
                                            title="Panel Options" data-rel="tooltip">
                                            <i class="icon dripicons-dots-3"></i>
                                        </a>
                                        <div class="dropdown-menu  dropdown-menu-right theme-media">
                                            <div class="dropdown-menu-header">
                                                <div class="dmh-inner">
                                                    <h4>Panel Options</h4>
                                                </div>
                                            </div>
                                            <a class="dropdown-item cp" href="#"
                                                title="">
                                                <span class="color-fill-icon"
                                                    style="background-color:#fff;"></span>
                                                Header Background Color
                                            </a>
                                            <a class="dropdown-item header-fontcolor"
                                                href="#" title="">
                                                <span class="color-fill-icon"
                                                    style="background-color:#333"></span>
                                                Header Font Color Dark/Light
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="removeWidgets" href="#"
                                            title="Remove Panel" data-rel="tooltip">
                                            <i class="icon dripicons-cross"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="console-panel-body " style="border: 1px solid #ccc;border-radius: .25rem;position: relative;box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);flex: 1 1 18%;">
                            <a href="/Site/Grid" data-rel="tooltip" data-original-title="Click to View full details">
                                <div class="row" id="Grid">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 text-center center-img">
                                                <i class="fa fa-solid fa-bolt" style="font-size:3em;"></i><br />
                                            </div>
                                            <div class="col-12 text-center">
                                                <label>3 Phase </label><br />
                                                <label class="text-warning">
                                                    Grid Type
                                                </label><br />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4 text-center">
                                                <Span id="GRVOLT"></Span> <br />
                                                <span class="text-warning ">R VOLT</span>
                                            </div>
                                            <div class="col-4 text-center">
                                                <Span id="GVVOLT"></Span> <br />
                                                <span class="text-warning ">Y VOLT</span>
                                            </div>
                                            <div class="col-4 text-center">
                                                <Span id="GBVOLT"></Span> <br />
                                                <span class="text-warning ">B VOLT</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4 text-center">
                                                <Span id="GRCR"></Span> <br />
                                                <span class="text-warning ">R CR</span>
                                            </div>
                                            <div class="col-4 text-center">
                                                <Span id="GVCt"></Span> <br />
                                                <span class="text-warning ">Y CT</span>
                                            </div>
                                            <div class="col-4 text-center">
                                                <Span id="GBCR"></Span> <br />
                                                <span class="text-warning ">B CR</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4 text-center">
                                                <Span id="">O Hz</Span> <br />
                                                <span class="text-warning ">Freq</span>
                                            </div>
                                            <div class="col-4 text-center">
                                            </div>
                                            <div class="col-4 text-center">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>`;
            }

            if (tempTenantData[i].IsGeneratorAvailable == true) {
                tabcontentHtml += `  <div class="grid-stack-item ${tempTenantData[i].IsGeneratorVisible == 1 ? '' : tempTenantData[i].IsGeneratorVisible == 2 ? 'notvisible ' : 'disable '}" data-gs-auto-position="true"
             data-gs-width="4" data-gs-height="12" data-gs-min-height="12"
             data-gs-min-width="4">
            <div class="console-panel grid-stack-item-content">
                <div class="console-panel-header light" style="background-color: rgb(12, 52, 61);">
                    <div class="cph-left">
                        <h5>Generator <i class="icon dripicons-bell text-warning" style="font-size: 1em;"></i></h5>
                    </div>
                    <div class="cph-right">
                        <ul class="top-header-btns">
                            <li>
                                <a class="collapse-panel" href="#"
                                   title="Collapse/Uncollapse Panel"
                                   data-rel="tooltip">
                                    <i class="icon dripicons-chevron-up"></i>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown"
                                   title="Panel Options" data-rel="tooltip">
                                    <i class="icon dripicons-dots-3"></i>
                                </a>
                                <div class="dropdown-menu  dropdown-menu-right theme-media">
                                    <div class="dropdown-menu-header">
                                        <div class="dmh-inner">
                                            <h4>Panel Options</h4>
                                        </div>
                                    </div>
                                    <a class="dropdown-item cp" href="#"
                                       title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#fff;"></span>
                                        Header Background Color
                                    </a>
                                    <a class="dropdown-item header-fontcolor"
                                       href="#" title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#333"></span>
                                        Header Font Color Dark/Light
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a class="removeWidgets" href="#"
                                   title="Remove Panel" data-rel="tooltip">
                                    <i class="icon dripicons-cross"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="console-panel-body" style="border: 1px solid #ccc;border-radius: .25rem;position: relative;box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);flex: 1 1 18%;">
                    <a href="/Site/Generator" data-rel="tooltip" data-original-title="Click to View full details">
                        <div class="row" id="Generator">
                            <div class="col-12">

                                <div class="row">
                                    <div class="col-12 text-center center-img">
                                        <i class="fa fa-solid fa-industry" style="font-size:3em;"></i><br />
                                    </div>
                                    <div class="col-12 text-center">
                                        <label> 1 Nos</label><br />
                                        <label class="text-warning">
                                            Generator
                                        </label><br />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 text-center">
                                        <Span id="gRVolt">O V</Span> <br />
                                        <span class="text-warning ">R VOLT</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <Span id="gYVlot">O V</Span> <br />
                                        <span class="text-warning ">Y VOLT</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <Span id="gBVlot">O V</Span> <br />
                                        <span class="text-warning ">B VOLT</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 text-center">
                                        <Span id="BRCt">O A</Span> <br />
                                        <span class="text-warning ">R CT</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <Span id="BVCt">O A</Span><br />
                                        <span class="text-warning ">Y CT</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <Span id="BBCt">O A</Span><br />
                                        <span class="text-warning ">B CT</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 text-center">
                                        <Span id="gFreq">O Hz</Span><br />
                                        <span class="text-warning ">Freq</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <Span id="gFuel"></Span><br />
                                        <span class="text-warning ">Fuel</span>
                                    </div>
                                    <div class="col-4 text-center">
                                        <Span id="gBat">O V</Span> <br />
                                        <span class="text-warning ">Bat VOLT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>`;
            }
            if (tempTenantData[i].IsBatteryAvailable == true) {
                tabcontentHtml += `
        <div class="grid-stack-item ${tempTenantData[i].IsBatteryVisible == 1 ? '' : tempTenantData[i].IsBatteryVisible == 2 ? 'notvisible ' : 'disable '}" data-gs-auto-position="true"
             data-gs-width="4" data-gs-height="12" data-gs-min-height="12"
             data-gs-min-width="4">
            <div class="console-panel grid-stack-item-content">
                <div class="console-panel-header light" style="background-color: rgb(12, 52, 61);">
                    <div class="cph-left">
                        <h5>Battery <i class="icon dripicons-bell text-warning" style="font-size: 1em;"></i></h5>
                    </div>
                    <div class="cph-right">
                        <ul class="top-header-btns">
                            <li>
                                <a class="collapse-panel" href="#"
                                   title="Collapse/Uncollapse Panel"
                                   data-rel="tooltip">
                                    <i class="icon dripicons-chevron-up"></i>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown"
                                   title="Panel Options" data-rel="tooltip">
                                    <i class="icon dripicons-dots-3"></i>
                                </a>
                                <div class="dropdown-menu  dropdown-menu-right theme-media">
                                    <div class="dropdown-menu-header">
                                        <div class="dmh-inner">
                                            <h4>Panel Options</h4>
                                        </div>
                                    </div>
                                    <a class="dropdown-item cp" href="#"
                                       title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#fff;"></span>
                                        Header Background Color
                                    </a>
                                    <a class="dropdown-item header-fontcolor"
                                       href="#" title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#333"></span>
                                        Header Font Color Dark/Light
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a class="removeWidgets" href="#"
                                   title="Remove Panel" data-rel="tooltip">
                                    <i class="icon dripicons-cross"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="console-panel-body" style="border: 1px solid #ccc;border-radius: .25rem;position: relative;box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);flex: 1 1 18%;">
                    <a href="/Site/Battery" data-rel="tooltip" data-original-title="Click to View full details">
                        <div class="row" id="Battery">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 text-center center-img">
                                        <i class="fa fa-car-battery" style="font-size:3em;"></i><br />
                                    </div>
                                    <div class="col-12 text-center">
                                        <label>1 Nos</label><br />
                                        <label class="text-warning">
                                            Battery
                                        </label><br />
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="BattreyType">Lithium</Span> <br />
                                        <span class="text-warning ">
                                            Battery
                                            Type
                                        </span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="NoOfBattery">22 Nos</Span> <br />
                                        <span class="text-warning ">
                                            No of
                                            Battery
                                        </span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="Ct">-76.00 A</Span> <br />
                                        <span class="text-warning ">CT</span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="Volt">48.01 V</Span> <br />
                                        <span class="text-warning ">VOLT</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="AvgBatTemp">26.64 C</Span> <br />
                                        <span class="text-warning ">
                                            Avg
                                            Bat.Temp
                                        </span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="AvgEngTemp">26.64 C</Span> <br />
                                        <span class="text-warning ">
                                            Avg
                                            Eng.Temp
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `;
            }
            if (tempTenantData[i].IsSolarAvailable == true) {
                tabcontentHtml += `
        <div class="grid-stack-item ${tempTenantData[i].IsSolarVisible == 1 ? '' : tempTenantData[i].IsSolarVisible == 2 ? 'notvisible ' : 'disable '}" data-gs-auto-position="true"
             data-gs-width="4" data-gs-height="12" data-gs-min-height="10"
             data-gs-min-width="4">
            <div class="console-panel grid-stack-item-content">
                <div class="console-panel-header light" style="background-color: rgb(12, 52, 61);">
                    <div class="cph-left">
                        <h5>Solar <i class="icon dripicons-bell text-warning" style="font-size: 1em;"></i></h5>
                    </div>
                    <div class="cph-right">
                        <ul class="top-header-btns">
                            <li>
                                <a class="collapse-panel" href="#"
                                   title="Collapse/Uncollapse Panel"
                                   data-rel="tooltip">
                                    <i class="icon dripicons-chevron-up"></i>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown"
                                   title="Panel Options" data-rel="tooltip">
                                    <i class="icon dripicons-dots-3"></i>
                                </a>
                                <div class="dropdown-menu  dropdown-menu-right theme-media">
                                    <div class="dropdown-menu-header">
                                        <div class="dmh-inner">
                                            <h4>Panel Options</h4>
                                        </div>
                                    </div>
                                    <a class="dropdown-item cp" href="#"
                                       title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#fff;"></span>
                                        Header Background Color
                                    </a>
                                    <a class="dropdown-item header-fontcolor"
                                       href="#" title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#333"></span>
                                        Header Font Color Dark/Light
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a class="removeWidgets" href="#"
                                   title="Remove Panel" data-rel="tooltip">
                                    <i class="icon dripicons-cross"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="console-panel-body" style="border: 1px solid #ccc;border-radius: .25rem;position: relative;box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);flex: 1 1 18%;">
                    <a href="/Site/Solar" data-rel="tooltip" data-original-title="Click to View full details">
                        <div class="row" id="temp">
                            <div class="col-12">

                                <div class="row">
                                    <div class="col-12 text-center center-img">
                                        <i class="fas fa-solar-panel" style="font-size:3em;"></i><br />
                                    </div>
                                    <div class="col-12 text-center">
                                        <label id="NoofChargers"></label><br />
                                        <label class="text-warning">No of Chargers</label><br />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center ">
                                        <Span id="IPCt"></Span> <br />
                                        <span class="text-warning ">I/P CT</span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="IPVolt"></Span> :<br />
                                        <span class="text-warning ">I/P VOLT</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="OPCt"> </Span><br />
                                        <span class="text-warning ">O/P CT</span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="OPVolt"></Span> <br />
                                        <span class="text-warning ">O/P VOLT</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="">O Hz</Span> <br />
                                        <span class="text-warning ">Freq</span>
                                    </div>
                                    <div class="col-6 text-center">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `;
            }
            if (tempTenantData[i].IsRectifierAvailable == true) {
                tabcontentHtml += `<div class="grid-stack-item ${tempTenantData[i].IsRectifierVisible == 1 ? '' : tempTenantData[i].IsRectifierVisible == 2 ? 'notvisible ' : 'disable '}" data-gs-auto-position="true"
             data-gs-width="4" data-gs-height="12" data-gs-min-height="10"
             data-gs-min-width="4">
            <div class="console-panel grid-stack-item-content">
                <div class="console-panel-header light" style="background-color: rgb(12, 52, 61);">
                    <div class="cph-left">
                        <h5>Rectifier <i class="icon dripicons-bell text-warning" style="font-size: 1em;"></i></h5>
                    </div>
                    <div class="cph-right">
                        <ul class="top-header-btns">
                            <li>
                                <a class="collapse-panel" href="#"
                                   title="Collapse/Uncollapse Panel"
                                   data-rel="tooltip">
                                    <i class="icon dripicons-chevron-up"></i>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown"
                                   title="Panel Options" data-rel="tooltip">
                                    <i class="icon dripicons-dots-3"></i>
                                </a>
                                <div class="dropdown-menu  dropdown-menu-right theme-media">
                                    <div class="dropdown-menu-header">
                                        <div class="dmh-inner">
                                            <h4>Panel Options</h4>
                                        </div>
                                    </div>
                                    <a class="dropdown-item cp" href="#"
                                       title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#fff;"></span>
                                        Header Background Color
                                    </a>
                                    <a class="dropdown-item header-fontcolor"
                                       href="#" title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#333"></span>
                                        Header Font Color Dark/Light
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a class="removeWidgets" href="#"
                                   title="Remove Panel" data-rel="tooltip">
                                    <i class="icon dripicons-cross"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="console-panel-body" style="border: 1px solid #ccc;border-radius: .25rem;position: relative;box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);flex: 1 1 18%;">
                    <a href="/Site/Rectifier" data-rel="tooltip" data-original-title="Click to View full details">
                        <div class="row" id="Solar">
                            <div class="col-12">

                                <div class="row">
                                    <div class="col-12 text-center center-img">
                                        <i class="fa fa-microchip" style="font-size:3em;"></i><br />
                                    </div>

                                    <div class="col-12 text-center">
                                        <label id="NoofRectifier"></label><br />
                                        <label class="text-warning">
                                            No of Rectifier
                                        </label><br />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="RIPCt"></Span> <br />
                                        <span class="text-warning ">I/P CT</span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="RIPVolt"></Span> <br />
                                        <span class="text-warning ">I/P VOLT</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="ROPCt"></Span> <br />
                                        <span class="text-warning ">O/P CT</span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="OPVolt"></Span> <br />
                                        <span class="text-warning ">O/P VOLT</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="">O Hz</Span> <br />
                                        <span class="text-warning ">Freq</span>
                                    </div>
                                    <div class="col-6 text-center">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `;
            }
            if (tempTenantData[i].IsPortableBatteryAvailable == true) {
                tabcontentHtml += `<div class="grid-stack-item ${tempTenantData[i].IsPortableBatteryVisible == 1 ? '' : tempTenantData[i].IsPortableBatteryVisible == 2 ? 'notvisible ' : 'disable '}" data-gs-auto-position="true"
             data-gs-width="4" data-gs-height="12" data-gs-min-height="12"
             data-gs-min-width="4">
            <div class="console-panel grid-stack-item-content">
                <div class="console-panel-header light" style="background-color: rgb(12, 52, 61);">
                    <div class="cph-left">
                        <h5>Portable Battery <i class="icon dripicons-bell text-warning" style="font-size: 1em;"></i></h5>
                    </div>
                    <div class="cph-right">
                        <ul class="top-header-btns">
                            <li>
                                <a class="collapse-panel" href="#"
                                   title="Collapse/Uncollapse Panel"
                                   data-rel="tooltip">
                                    <i class="icon dripicons-chevron-up"></i>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown"
                                   title="Panel Options" data-rel="tooltip">
                                    <i class="icon dripicons-dots-3"></i>
                                </a>
                                <div class="dropdown-menu  dropdown-menu-right theme-media">
                                    <div class="dropdown-menu-header">
                                        <div class="dmh-inner">
                                            <h4>Panel Options</h4>
                                        </div>
                                    </div>
                                    <a class="dropdown-item cp" href="#"
                                       title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#fff;"></span>
                                        Header Background Color
                                    </a>
                                    <a class="dropdown-item header-fontcolor"
                                       href="#" title="">
                                        <span class="color-fill-icon"
                                              style="background-color:#333"></span>
                                        Header Font Color Dark/Light
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a class="removeWidgets" href="#"
                                   title="Remove Panel" data-rel="tooltip">
                                    <i class="icon dripicons-cross"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="console-panel-body" style="border: 1px solid #ccc;border-radius: .25rem;position: relative;box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);flex: 1 1 18%;">
                    <a href="/Site/PortableBattery" data-rel="tooltip" data-original-title="Click to View full details">
                        <div class="row" id="Battery">
                            <div class="col-12">

                                <div class="row">
                                    <div class="col-12 text-center center-img">
                                        <i class="fa fa-solid fa-charging-station" style="font-size:3em;"></i><br />
                                    </div>
                                    <div class="col-12 text-center">
                                        <label>1 Nos</label><br />
                                        <label class="text-warning">
                                            Portable Battery
                                        </label><br />
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="BattreyType">Lithium</Span> <br />
                                        <span class="text-warning ">
                                            Battery
                                            Type
                                        </span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="NoOfBattery">22 Nos</Span> <br />
                                        <span class="text-warning ">
                                            No of
                                            Battery
                                        </span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="Ct">-76.00 A</Span> <br />
                                        <span class="text-warning ">CT</span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="Volt">48.01 V</Span> <br />
                                        <span class="text-warning ">VOLT</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <Span id="AvgBatTemp">26.64 C</Span> <br />
                                        <span class="text-warning ">
                                            Avg
                                            Bat.Temp
                                        </span>
                                    </div>
                                    <div class="col-6 text-center">
                                        <Span id="AvgEngTemp">26.64 C</Span> <br />
                                        <span class="text-warning ">
                                            Avg
                                            Eng.Temp
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>`;
            }
        }
        tabcontentHtml += ` </div>
        </div>`;
    }
    $(".tab-content").html('');
    $(".tab-content").html(tabcontentHtml);




}
//function FillPaymentHistoryChartData() {
//    $.ajax({
//        type: "GET",
//        url: "/Site/GetList",
//        success: function (data) {
//            var slNo = 1;
//            $('#Sitetable').DataTable({
//                "order": [],
//                destroy: true,
//                autoWidth: true,
//                scrollX: true,
//                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
//                dom: 'Bfrtip',
//                buttons: [
//                    'pageLength',
//                    {
//                        extend: 'excel',
//                        exportOptions: {
//                            columns: 'th:not(:last-child)'
//                        }
//                    }, {
//                        extend: 'csv',
//                        exportOptions: {
//                            columns: 'th:not(:last-child)'
//                        }
//                    }
//                ],
//                "aaData": data.response,
//                "columns": [

//                    {
//                        "data": "sINo",
//                        render: function (data, type, row, meta) {
//                            return meta.row + meta.settings._iDisplayStart + 1;
//                        }
//                    },
//                    { "data": "companyName" },
//                    { "data": "mobile" },
//                    { "data": "email" },
//                    { "data": "address" },

//                ],
//                initComplete: function () {
//                    // Move Search To Panel Header
//                    let _container = $(this).parents('.console-panel').find('.get_dt_search');
//                    let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');

//                    $("#Sitetable_wrapper .dataTables_filter input").appendTo(_container);
//                    $("#Sitetable_wrapper .dt-filters").css("display", "none");
//                    $(_container).find("input").attr('placeholder', 'Search From Table');
//                    $("#Sitetable .dt-bottom").appendTo(_bottom_container);

//                    $(colvis.button()).insertAfter(_container);
//                }
//            });
//        }
//    });
//}
//function FillPaymentHistoryChartData() {
//    $.ajax({
//        type: "GET",
//        url: "/Company/GetList",
//        success: function (data) {
//            var slNo = 1;
//            $('#alarmsstable ').DataTable({
//                "order": [],
//                destroy: true,
//                autoWidth: true,
//                scrollX: true,
//                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
//                dom: 'Bfrtip',
//                buttons: [
//                    'pageLength',
//                    {
//                        extend: 'excel',
//                        exportOptions: {
//                            columns: 'th:not(:last-child)'
//                        }
//                    }, {
//                        extend: 'csv',
//                        exportOptions: {
//                            columns: 'th:not(:last-child)'
//                        }
//                    }
//                ],
//                "aaData": data.response,
//                "columns": [

//                    {
//                        "data": "sINo",
//                        render: function (data, type, row, meta) {
//                            return meta.row + meta.settings._iDisplayStart + 1;
//                        }
//                    },
//                    { "data": "companyName" },
//                    { "data": "mobile" },
//                    { "data": "email" },
//                    { "data": "address" },

//                ],
//                initComplete: function () {
//                    // Move Search To Panel Header
//                    let _container = $(this).parents('.console-panel').find('.get_dt_search');
//                    let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');

//                    $("#alarmsstable_wrapper .dataTables_filter input").appendTo(_container);
//                    $("#alarmsstable_wrapper .dt-filters").css("display", "none");
//                    $(_container).find("input").attr('placeholder', 'Search From Table');
//                    $("#alarmsstable .dt-bottom").appendTo(_bottom_container);

//                    $(colvis.button()).insertAfter(_container);
//                }
//            });
//        }
//    });
//}
//function renderLineChart(data) {
//    var ctx = document.getElementById("donutchart1").getContext('2d');
//    var myChart = new Chart(ctx, {
//        type: 'pie',
//        data: {
//            labels: data.Table1.map(d => d.title),
//            datasets: [{
//                data: data.Table1.map(d => d.value),
//                backgroundColor: [
//                    '#afd6fa',
//                    '#82b1dd'
//                ]
//            }]
//        },
//        options: {
//            title: {
//                display: false,
//            },
//            tooltips: {
//                mode: 'nearest',
//                intersect: false,
//                position: 'nearest',
//                xPadding: 10,
//                yPadding: 10,
//                caretPadding: 10
//            },
//            legend: {
//                display: false
//            },
//            responsive: true,
//            maintainAspectRatio: true,
//            scales: {
//                xAxes: [{
//                    display: false,
//                    gridLines: false,
//                    scaleLabel: {
//                        display: true,
//                        labelString: 'Month'
//                    }
//                }],
//                yAxes: [{
//                    display: false,
//                    gridLines: false,
//                    scaleLabel: {
//                        display: true,
//                        labelString: 'Value'
//                    },
//                    ticks: {
//                        beginAtZero: true
//                    }
//                }]
//            }
//        }
//    });
//    var ctx = document.getElementById("donutchart2").getContext('2d');
//    var myChart = new Chart(ctx, {
//        type: 'doughnut',
//        data: {
//            labels: data.Table2.map(d => d.title),
//            datasets: [{
//                label: 'Running On',
//                data: data.Table2.map(d => d.value),
//                backgroundColor: [
//                    '#afd6fa',
//                    '#82b1dd',
//                    '#6ea1cf'
//                ]
//            }]
//        },
//        options: {
//            title: {
//                display: false,
//            },
//            tooltips: {
//                mode: 'nearest',
//                intersect: false,
//                position: 'nearest',
//                xPadding: 10,
//                yPadding: 10,
//                caretPadding: 10
//            },
//            legend: {
//                display: false
//            },
//            responsive: true,
//            maintainAspectRatio: true,
//            scales: {
//                xAxes: [{
//                    display: false,
//                    gridLines: false,
//                    scaleLabel: {
//                        display: true,
//                        labelString: 'Month'
//                    }
//                }],
//                yAxes: [{
//                    display: false,
//                    gridLines: false,
//                    scaleLabel: {
//                        display: true,
//                        labelString: 'Value'
//                    },
//                    ticks: {
//                        beginAtZero: true
//                    }
//                }]
//            }
//        }
//    });
//}

var alarmsstable;
$(window).on("load", function () {

    alarmsstable = $('#alarmsstable').DataTable({
        //"ajax": '/js/JSON/data1.json',
        "ajax": {
            "url": '/Site/GetCardDataList',
            "dataSrc": function (json) {
                var data = $.parseJSON(json.response);
                // Manipulate the JSON response data if needed
                return data.Table1; // Assuming your data is nested under a 'data' key
            }
        },
        
        "dom": '<"top"B<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [
            { "data": "srNo" },
            { "data": "alarms" },
            { "data": "alarmsDate" },
            { "data": "severvity" },
            // Add more column definitions as needed
        ],
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        }],
        "responsive": true,
        "colReorder": {
            realtime: false
        },
        "buttons": [
            {
                extend: 'excelHtml5',
                text: 'Export'
            }
        ],
        "stateSave": false,
        "createdRow": function (row, data, dataIndex) {

            var lastCellData = data.severvity; // Get data from the last cell
            var $lastCell = $(row).children('td').last(); // Select the last cell
            var badgeHTML = ''; // Initialize HTML content
            if (lastCellData === 'Info') {
                badgeHTML = '<span class="badge badge-success badge-pill">Success</span>';
            } else if (lastCellData === 'Minor') {
                badgeHTML = '<span class="badge badge-warning badge-pill">Warning</span>';
            } else if (lastCellData === 'Danger') {
                badgeHTML = '<span class="badge badge-danger badge-pill">Danger</span>';
            }
            $lastCell.html(badgeHTML);
        },
        initComplete: function () {

            // Move Search To Panel Header
            let _container = $(this).parents('.console-panel').find('.get_dt_search')
            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container')

            $("#alarmsstable_wrapper .dataTables_filter input").appendTo(_container);
            $("#alarmsstable_wrapper  .dt-filters").css("display", "none");
            $(_container).find("input").attr('placeholder', 'Search From Table');
            debugger;
            $("#alarmsstable_wrapper  .dt-bottom").appendTo(_bottom_container);
            $("#alarmsstable_wrapper  .dt-button").removeClass("dt-button buttons-excel buttons-html5");
            $("#alarmsstable_wrapper .dt-buttons button")
                .addClass("btn").css("background-color: rgb(12, 52, 61)"); // Add the desired Bootstrap class

            $("#alarmsstable_wrapper .dt-buttons").addClass("mr-2");
            $("#alarmsstable_wrapper .dt-buttons").appendTo(_container);
            dashboardFilters();

           /* $(colvis.button()).insertAfter(_container);*/

        }
    });

    // ======= Filters Code Start ======= //
    function dashboardFilters() {
        $(".filterhead").each(function (i) {
            var select = $('<select multiple class="multiselect"></select>')
                .appendTo($(this).empty())
                .on('change', function () {
                    var term = $(this).val() || [];
                    regExSearch = '^(' + term.join('|') + ')';
                    alarmsstable.column(i).search(regExSearch, true, false).draw();
                });
            alarmsstable.column(i).data().unique().sort().each(function (d, j) {
                d = `<span>` + d + `</span>`;
                d = $.parseHTML(d);
                d = $(d).text();
                if (!$(select).find("option:contains('" + d + "')").length) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                }
            });
        });
        $(".multiselect").SumoSelect({ search: true, searchText: 'Enter here.' });
    }

    // ======= Filters Code End ======= //

    // Enable Column Show Hide Option
    var colvis = new $.fn.dataTable.ColVis(alarmsstable, {
        showAll: "Restore Defaults"
    });

    //$('#alarmsstable').on('click', 'tbody tr', function () {
    //    // Get the data of the clicked row
    //    let rowData = alarmsstable.row(this).data();

    //    // Extract the URL from the row data (assuming the URL is stored in a specific column)
    //    let url = rowData.urlColumn; // Replace 'urlColumn' with the actual column name or index

    //    // Navigate to the URL
    //    window.location.href = "/SiteDashboard.html";
    //});
});

function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}