/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  Engine.cpp
Project:    CS230 Engine
Author:     Jonathan Holmes , Jimin Lim(jimin.lim@digipen.edu)
Created:    March 8, 2023
Updated:    March 13, 2023
*/
#pragma once
#include "Engine.h"

Engine::Engine() :
#ifdef _DEBUG				
    logger(CS230::Logger::Severity::Debug, true)
#else 						
    logger(CS230::Logger::Severity::Event, false)
#endif
{ }

Engine::~Engine() {}

void Engine::Start(std::string window_title) {
    logger.LogEvent("Engine Started");
    window.Start(window_title);
    //Start other services
}

void Engine::Stop() {
    //Stop all services
    logger.LogEvent("Engine Stopped");
}

void Engine::Update() {
    logger.LogVerbose("Engine Update");
    window.Update();
    //Update other services
    gamestatemanager.Update();
}

bool Engine::HasGameEnded() {
    //gameStateManager.Update();
    return gamestatemanager.HasGameEnded();
}

