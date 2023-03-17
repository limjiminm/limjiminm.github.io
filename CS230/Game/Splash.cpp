/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  Splash.cpp
Project:    CS230 Engine
Author:     Jonathan Holmes , Jimin Lim(jimin.lim@digipen.edu)
Created:    March 8, 2023
Updated:    March 16, 2023
*/

#include "../Engine/Engine.h"
#include "States.h"
#include "Splash.h"

Splash::Splash() {
}

void Splash::Load() {
    counter = 0;
}

void Splash::Update() {
    Engine::GetLogger().LogDebug(std::to_string(counter));
    if (counter >= 5) {
        Engine::GetGameStateManager().ClearNextGameState();
        Engine::GetGameStateManager().SetNextGameState(static_cast<int>(States::Mode1));
    }

    counter++;
}

void Splash::Unload() {

}






