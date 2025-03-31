import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../style/Calendar.css";

const Calendar = () => {
    const [events, setEvents] = useState([]);
    

    useEffect(() => {
        fetchEvents();
    }, []);

    // Recupera eventi dal tuo Google Calendar
    const fetchEvents = async () => {
        const response = await fetch(
            `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        );
        const data = await response.json();

        // 🛠️ Controlla se `items` esiste prima di usare `map`
        if (!data.items) {
            console.error("Nessun evento trovato. Controlla il Calendar ID e l'API Key.");
            return;
        }

        const formattedEvents = data.items.map((event) => ({
            title: event.summary,
            start: event.start.dateTime || event.start.date,
            end: event.end.dateTime || event.end.date,
            url: event.htmlLink,
        }));

        setEvents(formattedEvents);
    };

    // Funzione per gestire la richiesta di appuntamento
    const handleDateClick = (info) => {
        const confirmBooking = window.confirm(
            `Vuoi richiedere un appuntamento il ${info.dateStr}?`
        );
        if (confirmBooking) {
            // Invia una richiesta di appuntamento (da gestire con un backend)
            alert("Richiesta inviata! Attendi la conferma.");
        }
    };

    return (
        <div className="calendar-container">
            <h3 className="calendar-header">Prenota una Call</h3>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                dateClick={handleDateClick} // Clicca su una data per prenotare
                eventClick={(info) => window.open(info.event.url, "_blank")} // Clicca su un evento per vederlo su Google Calendar
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height="600px"
            />
        </div>
    );
};

export default Calendar;
