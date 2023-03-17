/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  Logger.cpp
Project:    CS230 Engine
Author:     Jonathan Holmes, Jimin lim
Created:    March 8, 2023
Updated:    March 15, 2023
*/

#include <iostream>
#include "Logger.h"

CS230::Logger::Logger(Logger::Severity severity, bool use_console) : min_level(severity), out_stream("Trace.log") {
    if (use_console == true) {
        out_stream.set_rdbuf(std::cout.rdbuf());
    }
}

CS230::Logger::~Logger() {
    out_stream.flush();
    out_stream.close();
}

void CS230::Logger::log(CS230::Logger::Severity severity, std::string message) 

{
    if (severity >= min_level) {
        switch (severity) {
        case Severity::Verbose:
            out_stream << "Verbose\t";
            break;
        case Severity::Debug:
            out_stream << "Debug\t";
            break;
        case Severity::Event:
            out_stream << "Event\t";
            break;
        case Severity::Error:
            out_stream << "Error\t";
            break;
        };
        out_stream << message << std::endl;
    }
}
