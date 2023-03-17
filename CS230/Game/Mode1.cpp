/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  Mode1.cpp
Project:    CS230 Engine
Author:     Jonathan Holmes , Jimin Lim(jimin.lim@digipen.edu)
Created:    March 8, 2023
Updated:    March 16, 2023
*/

#include "../Engine/Engine.h"
#include "States.h"
#include "Mode1.h"
#include<doodle/doodle.hpp>

Mode1::Mode1() {

}

void Mode1::Load() {
    
}

void Mode1::Update() {

    if (doodle::KeyIsPressed && doodle::Key == doodle::KeyboardButtons::_1)
    {
        Engine::GetGameStateManager().ClearNextGameState();
        Engine::GetGameStateManager().SetNextGameState(static_cast<int>(States::Mode2));
    }
}

void Mode1::Unload() {

}






